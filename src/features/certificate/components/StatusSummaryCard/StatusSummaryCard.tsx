import React, {useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {STRINGS} from '../../../../shared/constants/strings';
import {useColors} from '../../../../shared/theme';
import {styles} from './styles';
import {StatusSummaryCardProps} from './types';

const STATUS_KEYS = [
  STRINGS.statusNew,
  STRINGS.statusPending,
  STRINGS.statusUnderReview,
  STRINGS.statusDone,
];

const StatusSummaryCard: React.FC<StatusSummaryCardProps> = ({
  requests,
  activeStatus,
  onStatusPress,
}) => {
  const colors = useColors();

  const statusConfigs = useMemo(
    () => [
      {
        key: STRINGS.statusNew,
        label: STRINGS.statusNew,
        bg: colors.statusNewLight,
        accent: colors.statusNew,
      },
      {
        key: STRINGS.statusPending,
        label: STRINGS.statusPending,
        bg: colors.statusPendingLight,
        accent: colors.statusPending,
      },
      {
        key: STRINGS.statusUnderReview,
        label: STRINGS.statusUnderReview,
        bg: colors.statusUnderReviewLight,
        accent: colors.statusUnderReview,
      },
      {
        key: STRINGS.statusDone,
        label: STRINGS.statusDone,
        bg: colors.statusDoneLight,
        accent: colors.statusDone,
      },
    ],
    [colors],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    STATUS_KEYS.forEach(k => {
      map[k] = 0;
    });
    requests.forEach(r => {
      const status = r.status || '';
      if (map[status] !== undefined) {
        map[status]++;
      }
    });
    return map;
  }, [requests]);

  const renderCard = (config: {key: string; label: string; bg: string; accent: string}) => {
    const isActive = activeStatus === config.key;
    return (
      <TouchableOpacity
        key={config.key}
        activeOpacity={0.7}
        onPress={() => onStatusPress(isActive ? null : config.key)}
        style={[
          styles.card,
          {backgroundColor: config.bg},
          isActive && styles.cardActive,
          isActive && {borderColor: config.accent},
        ]}
      >
        <Text style={[styles.count, {color: config.accent}]}>{counts[config.key] || 0}</Text>
        <Text style={[styles.label, {color: config.accent}]}>{config.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderCard(statusConfigs[0])}
        {renderCard(statusConfigs[1])}
      </View>
      <View style={styles.row}>
        {renderCard(statusConfigs[2])}
        {renderCard(statusConfigs[3])}
      </View>
    </View>
  );
};

export default StatusSummaryCard;
