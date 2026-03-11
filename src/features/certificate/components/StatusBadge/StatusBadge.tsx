import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {STRINGS} from '../../../../shared/constants/strings';
import {useColors} from '../../../../theme';
import {styles} from './styles';

interface StatusBadgeProps {
  status: string;
}

const STATUS_ICONS: Record<string, string> = {
  [STRINGS.statusNew]: 'file-document-outline',
  [STRINGS.statusPending]: 'clock-outline',
  [STRINGS.statusUnderReview]: 'eye-outline',
  [STRINGS.statusDone]: 'check-circle-outline',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({status}) => {
  const colors = useColors();

  const colorMap: Record<string, {color: string; bgColor: string}> = {
    [STRINGS.statusNew]: {color: colors.statusNew, bgColor: colors.statusNewLight},
    [STRINGS.statusPending]: {color: colors.statusPending, bgColor: colors.statusPendingLight},
    [STRINGS.statusUnderReview]: {
      color: colors.statusUnderReview,
      bgColor: colors.statusUnderReviewLight,
    },
    [STRINGS.statusDone]: {color: colors.statusDone, bgColor: colors.statusDoneLight},
  };

  const config = colorMap[status] || {color: colors.textSecondary, bgColor: colors.borderLight};
  const icon = STATUS_ICONS[status] || 'help-circle-outline';

  return (
    <View
      style={[styles.badge, {backgroundColor: config.bgColor, borderColor: config.color}]}
      accessibilityLabel={`Status: ${status}`}
    >
      <Icon name={icon} size={14} color={config.color} style={styles.icon} />
      <Text style={[styles.text, {color: config.color}]}>{status}</Text>
    </View>
  );
};

export default StatusBadge;
