import React from 'react';
import {Chip} from 'react-native-paper';
import {COLORS} from '../../../../shared/styles/colors';
import {styles} from './styles';

interface StatusBadgeProps {
  status: string;
}

const STATUS_COLOR_MAP: Record<string, string> = {
  New: COLORS.statusNew,
  Pending: COLORS.statusPending,
  'Under Review': COLORS.statusUnderReview,
  Done: COLORS.statusDone,
};

const StatusBadge: React.FC<StatusBadgeProps> = ({status}) => {
  const backgroundColor = STATUS_COLOR_MAP[status] || COLORS.textSecondary;

  return (
    <Chip
      style={[styles.chip, {backgroundColor}]}
      textStyle={[styles.chipText, {color: COLORS.chipText}]}
    >
      {status}
    </Chip>
  );
};

export default StatusBadge;
