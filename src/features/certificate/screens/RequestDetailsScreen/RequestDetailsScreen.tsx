import React, {useState} from 'react';
import {ScrollView, View, Alert, Text as RNText} from 'react-native';
import {Text, Card, Button, TextInput, HelperText} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRequests} from '../../hooks/useRequests';
import {CertificateRequest} from '../../../../types';
import {validatePurpose} from '../../validation';
import {STRINGS} from '../../../../shared/constants/strings';
import {COLORS} from '../../../../shared/styles/colors';
import {announceForAccessibility} from '../../../../shared/utils/accessibility';
import StatusBadge from '../../components/StatusBadge';
import CharacterCounter from '../../components/CharacterCounter';
import {styles} from './styles';

const srOnly = {position: 'absolute' as const, width: 1, height: 1, overflow: 'hidden' as const};

interface Props {
  route: any;
  navigation: any;
}

const RequestDetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const {request} = route.params as {request: CertificateRequest};
  const {editPurpose} = useRequests();

  const [editing, setEditing] = useState(false);
  const [purposeText, setPurposeText] = useState(request.purpose);
  const [purposeError, setPurposeError] = useState<string | undefined>();

  const canEdit = request.status === STRINGS.statusNew;
  const isDone = request.status === STRINGS.statusDone;

  const handleSavePurpose = () => {
    const error = validatePurpose(purposeText);
    if (error) {
      setPurposeError(error);
      announceForAccessibility(error);
      return;
    }
    if (request.reference_no) {
      editPurpose(request.reference_no, purposeText);
      announceForAccessibility(STRINGS.messagePurposeUpdated);
      Alert.alert(STRINGS.messageSuccess, STRINGS.messagePurposeUpdated);
      setEditing(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.label}>{STRINGS.labelReferenceNo}</Text>
          <Text style={styles.value}>{request.reference_no || 'N/A'}</Text>

          <Text style={styles.label}>{STRINGS.labelAddressTo.replace(' *', '')}</Text>
          <Text style={styles.value}>{request.address_to}</Text>

          <Text style={styles.label}>{STRINGS.labelStatus}</Text>
          <View style={styles.statusRow}>
            <StatusBadge status={request.status || 'Unknown'} />
            {isDone && (
              <Button
                mode="contained"
                compact
                style={styles.previewButton}
                icon={({size, color}) => <Icon name="file-pdf-box" size={size} color={color} />}
                onPress={() => navigation.navigate('PdfPreview')}
              >
                {STRINGS.buttonPreviewPdf}
              </Button>
            )}
          </View>

          {isDone && (
            <>
              <Text style={styles.label}>{STRINGS.labelIssuedOn.replace(' *', '')}</Text>
              <Text style={styles.value}>{request.issued_on}</Text>
            </>
          )}

          <Text style={styles.label}>{STRINGS.labelPurpose.replace(' *', '')}</Text>
          {editing ? (
            <View style={styles.editSection}>
              <TextInput
                value={purposeText}
                onChangeText={text => {
                  setPurposeText(text);
                  setPurposeError(validatePurpose(text));
                }}
                mode="outlined"
                multiline
                numberOfLines={4}
                error={!!purposeError}
                style={styles.editInput}
                outlineColor={COLORS.border}
                activeOutlineColor={COLORS.primary}
                accessibilityLabel="Edit purpose"
                accessibilityHint="Enter the updated purpose text"
              />
              <CharacterCounter current={purposeText.trim().length} minimum={50} />
              {!!purposeError && (
                <RNText accessibilityRole="alert" style={srOnly}>
                  {purposeError}
                </RNText>
              )}
              <HelperText type="error" visible={!!purposeError}>
                {purposeError}
              </HelperText>
              <View style={styles.editButtons}>
                <Button
                  mode="contained"
                  onPress={handleSavePurpose}
                  style={styles.saveButton}
                  disabled={!!purposeError}
                  icon={({size, color}) => <Icon name="content-save" size={size} color={color} />}
                >
                  {STRINGS.buttonSave}
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => {
                    setEditing(false);
                    setPurposeText(request.purpose);
                    setPurposeError(undefined);
                  }}
                  style={styles.cancelButton}
                >
                  {STRINGS.buttonCancel}
                </Button>
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.value}>{request.purpose}</Text>
              {canEdit && (
                <Button
                  mode="outlined"
                  onPress={() => setEditing(true)}
                  style={styles.editButton}
                  textColor={COLORS.primary}
                  icon={({size, color}) => <Icon name="pencil" size={size} color={color} />}
                >
                  {STRINGS.buttonEditPurpose}
                </Button>
              )}
            </View>
          )}
        </Card.Content>
      </Card>

      {!isDone && (
        <Card style={styles.messageCard}>
          <Card.Content>
            <Text style={styles.messageText}>{STRINGS.messageCertificateNotIssued}</Text>
          </Card.Content>
        </Card>
      )}
    </ScrollView>
  );
};

export default RequestDetailsScreen;
