import React, {useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {CertificateRequest} from '../../../../types';
import {COLORS} from '../../../../shared/styles/colors';
import {STRINGS} from '../../../../shared/constants/strings';
import {styles} from './styles';

interface StatusSummaryCardProps {
  requests: CertificateRequest[];
  activeStatus: string | null;
  onStatusPress: (status: string | null) => void;
}

interface StatusConfig {
  key: string;
  label: string;
  bg: string;
  accent: string;
}

const STATUS_CONFIGS: StatusConfig[] = [
  {
    key: STRINGS.statusNew,
    label: STRINGS.statusNew,
    bg: COLORS.statusNewLight,
    accent: COLORS.statusNew,
  },
  {
    key: STRINGS.statusPending,
    label: STRINGS.statusPending,
    bg: COLORS.statusPendingLight,
    accent: COLORS.statusPending,
  },
  {
    key: STRINGS.statusUnderReview,
    label: STRINGS.statusUnderReview,
    bg: COLORS.statusUnderReviewLight,
    accent: COLORS.statusUnderReview,
  },
  {
    key: STRINGS.statusDone,
    label: STRINGS.statusDone,
    bg: COLORS.statusDoneLight,
    accent: COLORS.statusDone,
  },
];

const StatusSummaryCard: React.FC<StatusSummaryCardProps> = ({
  requests,
  activeStatus,
  onStatusPress,
}) => {
  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    STATUS_CONFIGS.forEach(c => {
      map[c.key] = 0;
    });
    requests.forEach(r => {
      const status = r.status || '';
      if (map[status] !== undefined) {
        map[status]++;
      }
    });
    return map;
  }, [requests]);

  const renderCard = (config: StatusConfig) => {
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
          isActive && {borderWidth: 2, borderColor: config.accent},
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
        {renderCard(STATUS_CONFIGS[0])}
        {renderCard(STATUS_CONFIGS[1])}
      </View>
      <View style={styles.row}>
        {renderCard(STATUS_CONFIGS[2])}
        {renderCard(STATUS_CONFIGS[3])}
      </View>
    </View>
  );
};

export default StatusSummaryCard;
