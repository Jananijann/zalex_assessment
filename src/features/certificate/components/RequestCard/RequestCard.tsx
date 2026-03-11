import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CertificateRequest} from '../../../../types';
import {useColors} from '../../../../theme';
import {STRINGS} from '../../../../shared/constants/strings';
import StatusBadge from '../StatusBadge';
import {styles} from './styles';

interface RequestCardProps {
  request: CertificateRequest;
  onPress: () => void;
}

function getStatusBorderColor(
  status: string | undefined,
  colors: ReturnType<typeof useColors>,
): string {
  switch (status) {
    case STRINGS.statusNew:
      return colors.statusNew;
    case STRINGS.statusPending:
      return colors.statusPending;
    case STRINGS.statusUnderReview:
      return colors.statusUnderReview;
    case STRINGS.statusDone:
      return colors.statusDone;
    default:
      return colors.border;
  }
}

const RequestCard: React.FC<RequestCardProps> = ({request, onPress}) => {
  const colors = useColors();
  const borderColor = getStatusBorderColor(request.status, colors);

  return (
    <TouchableOpacity
      style={[styles.card, {borderLeftColor: borderColor, backgroundColor: colors.surface}]}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel={`Request ${request.reference_no}, status ${request.status}`}
      accessibilityHint="Double tap to view details"
    >
      <View style={styles.headerRow}>
        <Text style={[styles.refNo, {color: colors.textPrimary}]}>
          {request.reference_no || 'N/A'}
        </Text>
        <StatusBadge status={request.status || 'Unknown'} />
      </View>

      <Text style={[styles.purpose, {color: colors.textSecondary}]} numberOfLines={2}>
        {request.purpose}
      </Text>

      <View style={styles.footerRow}>
        <View style={styles.addressRow}>
          <Text style={[styles.addressLabel, {color: colors.textSecondary}]}>To: </Text>
          <Text style={[styles.addressTo, {color: colors.textSecondary}]} numberOfLines={1}>
            {request.address_to}
          </Text>
        </View>
        {request.issued_on ? (
          <View style={styles.dateRow}>
            <Icon name="calendar-outline" size={14} color={colors.textSecondary} />
            <Text style={[styles.issuedOn, {color: colors.textSecondary}]}>
              {request.issued_on}
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default RequestCard;
