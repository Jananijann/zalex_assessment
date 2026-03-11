import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useColors} from '../../../../theme';
import {STRINGS} from '../../../../shared/constants/strings';
import {styles} from './styles';

interface EmptyStateProps {
  onCreatePress?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({onCreatePress}) => {
  const colors = useColors();

  return (
    <View
      style={styles.container}
      accessibilityRole="summary"
      accessibilityLabel={`${STRINGS.emptyStateTitle}. ${STRINGS.emptyStateDescription}`}
    >
      <Icon
        name="file-document-outline"
        size={64}
        color={colors.textDisabled}
        style={styles.icon}
      />
      <Text style={[styles.title, {color: colors.textPrimary}]}>{STRINGS.emptyStateTitle}</Text>
      <Text style={[styles.description, {color: colors.textSecondary}]}>
        {STRINGS.emptyStateDescription}
      </Text>
      {onCreatePress && (
        <Button
          mode="contained"
          onPress={onCreatePress}
          style={styles.button}
          buttonColor={colors.primary}
          accessibilityLabel={STRINGS.emptyStateButton}
          accessibilityHint="Double tap to create a new certificate request"
        >
          {STRINGS.emptyStateButton}
        </Button>
      )}
    </View>
  );
};

export default EmptyState;
