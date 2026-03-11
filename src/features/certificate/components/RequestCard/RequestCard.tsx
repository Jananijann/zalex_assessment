import React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CertificateRequest} from '../../../../types';
import {COLORS} from '../../../../shared/styles/colors';
import {STRINGS} from '../../../../shared/constants/strings';
import StatusBadge from '../StatusBadge';
import {styles} from './styles';

interface RequestCardProps {
  request: CertificateRequest;
  onPress: () => void;
}

const RequestCard: React.FC<RequestCardProps> = ({request, onPress}) => {
  const isDone = request.status === STRINGS.statusDone;

  return (
    <Card style={styles.card} onPress={onPress} mode="elevated">
      <Card.Content>
        <View style={styles.headerRow}>
          <Text style={styles.refNo}>{request.reference_no || 'N/A'}</Text>
          <StatusBadge status={request.status || 'Unknown'} />
        </View>
        <Text style={styles.addressTo}>{request.address_to}</Text>
        <View style={styles.footerRow}>
          {isDone && (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="calendar-check" size={14} color={COLORS.textSecondary} />
              <Text style={[styles.issuedOn, {marginLeft: 4}]}>{request.issued_on}</Text>
            </View>
          )}
          <Icon name="chevron-right" size={20} color={COLORS.textSecondary} />
        </View>
        <Text style={styles.purpose} numberOfLines={2}>
          {request.purpose}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default RequestCard;
