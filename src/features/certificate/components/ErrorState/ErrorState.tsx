import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../../shared/styles/colors';
import {STRINGS} from '../../../../shared/constants/strings';
import {announceForAccessibility} from '../../../../shared/utils/accessibility';
import {styles} from './styles';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({message, onRetry}) => {
  useEffect(() => {
    announceForAccessibility(`${STRINGS.errorStateTitle}. ${message}`);
  }, [message]);

  return (
    <View style={styles.container} accessibilityRole="alert">
      <Icon name="alert-circle-outline" size={64} color={COLORS.danger} style={styles.icon} />
      <Text style={styles.title}>{STRINGS.errorStateTitle}</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <Button
          mode="outlined"
          onPress={onRetry}
          style={styles.button}
          textColor={COLORS.primary}
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
