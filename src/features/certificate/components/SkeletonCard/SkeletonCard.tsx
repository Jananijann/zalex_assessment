import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import {styles} from './styles';

const SkeletonCard: React.FC = () => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    );
    animation.start();
    return () => animation.stop();
  }, [shimmerAnim]);

  const opacity = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.4, 1],
  });

  return (
    <Animated.View style={[styles.card, {opacity}]}>
      <View style={styles.headerRow}>
        <View style={styles.titleBar} />
        <View style={styles.chipBar} />
      </View>
      <View style={styles.lineBar} />
      <View style={styles.lineBar} />
      <View style={styles.lineBarShort} />
    </Animated.View>
  );
};

export default SkeletonCard;
