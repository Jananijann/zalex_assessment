import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useColors} from '../../theme';
import {STRINGS} from '../../constants/strings';
import {announceForAccessibility} from '../../utils/accessibility';
import {styles} from './styles';
import {ErrorStateProps} from './types';

const ErrorState: React.FC<ErrorStateProps> = ({message, onRetry}) => {
  const colors = useColors();

  useEffect(() => {
    announceForAccessibility(`${STRINGS.errorStateTitle}. ${message}`);
  }, [message]);

  return (
    <View style={styles.container} accessibilityRole="alert">
      <Icon name="alert-circle-outline" size={64} color={colors.danger} style={styles.icon} />
      <Text style={[styles.title, {color: colors.textPrimary}]}>{STRINGS.errorStateTitle}</Text>
      <Text style={[styles.message, {color: colors.textSecondary}]}>{message}</Text>
      {onRetry && (
        <Button
          mode="outlined"
          onPress={onRetry}
          style={[styles.button, {borderColor: colors.primary}]}
          textColor={colors.primary}
          accessibilityLabel={STRINGS.errorStateRetry}
          accessibilityHint="Double tap to retry loading"
        >
          {STRINGS.errorStateRetry}
        </Button>
      )}
    </View>
  );
};

export default ErrorState;
