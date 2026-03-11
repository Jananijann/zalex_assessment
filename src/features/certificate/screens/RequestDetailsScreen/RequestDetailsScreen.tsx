import React, {useState, useRef, useCallback, useEffect} from 'react';
import {ScrollView, View, Text as RNText} from 'react-native';
import {Text, Card, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {CertificateRequest} from '../../services/types';
import {useRequests} from '../../hooks/useRequests';
import {validatePurpose} from '../../utils/validation';
import {STRINGS} from '../../../../shared/constants/strings';
import {useColors} from '../../../../shared/theme';
import {announceForAccessibility} from '../../../../shared/utils/accessibility';
import {RootState} from '../../../../app/rootReducer';
import StatusBadge from '../../components/StatusBadge';
import CharacterCounter from '../../../../shared/components/CharacterCounter';
import ThemedTextInput from '../../../../shared/components/ThemedTextInput';
import SuccessModal from '../../../../shared/components/SuccessModal';
import {styles} from './styles';

const srOnly = {position: 'absolute' as const, width: 1, height: 1, overflow: 'hidden' as const};

interface Props {
  route: any;
  navigation: any;
}

const RequestDetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const colors = useColors();
  const {request: routeRequest} = route.params as {request: CertificateRequest};
  const {editPurpose} = useRequests();

  // Read latest state from Redux so local edits are reflected
  const liveRequest = useSelector((state: RootState) =>
    state.certificate.requests.find(r => r.reference_no === routeRequest.reference_no),
  );
  const request = liveRequest || routeRequest;

  const [editing, setEditing] = useState(false);
  const [purposeText, setPurposeText] = useState(request.purpose);
  const [purposeError, setPurposeError] = useState<string | undefined>();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Keep purposeText in sync when request changes (e.g. after save)
  useEffect(() => {
    if (!editing) {
      setPurposeText(request.purpose);
    }
  }, [request.purpose, editing]);

  // Debounce validation to avoid flicker
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const debouncedValidate = useCallback((text: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      setPurposeError(validatePurpose(text));
    }, 400);
  }, []);

  const canEdit = request.status === STRINGS.statusNew;
  const isDone = request.status === STRINGS.statusDone;

  const handleSavePurpose = () => {
    // Clear any pending debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    const error = validatePurpose(purposeText);
    if (error) {
      setPurposeError(error);
      announceForAccessibility(error);
      return;
    }
    if (request.reference_no) {
      editPurpose(request.reference_no, purposeText);
      announceForAccessibility(STRINGS.messagePurposeUpdated);
      setEditing(false);
      setPurposeError(undefined);
      setShowSuccessModal(true);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    navigation.navigate('RequestsList');
  };

  return (
    <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
      <Card style={[styles.card, {backgroundColor: colors.surface}]}>
        <Card.Content>
          <View style={styles.headerRow}>
            <View style={styles.refRow}>
              <Icon name="file-document-outline" size={24} color={colors.primary} />
              <Text style={[styles.refNo, {color: colors.textPrimary}]}>
                {request.reference_no || 'N/A'}
              </Text>
            </View>
            <StatusBadge status={request.status || 'Unknown'} />
          </View>

          <View style={[styles.divider, {backgroundColor: colors.borderLight}]} />

          <View style={styles.twoColumn}>
            <View style={styles.columnItem}>
              <View style={styles.columnHeader}>
                <Icon name="map-marker-outline" size={16} color={colors.textSecondary} />
                <Text style={[styles.label, {color: colors.textSecondary}]}>
                  {STRINGS.labelAddressTo.replace(' *', '')}
                </Text>
              </View>
              <Text
                style={[
                  styles.value,
                  {color: colors.textPrimary, backgroundColor: colors.borderLight},
                ]}
              >
                {request.address_to}
              </Text>
            </View>
            {isDone && (
              <View style={styles.columnItem}>
                <View style={styles.columnHeader}>
                  <Icon name="calendar-outline" size={16} color={colors.textSecondary} />
                  <Text style={[styles.label, {color: colors.textSecondary}]}>
                    {STRINGS.labelIssuedOn.replace(' *', '')}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.value,
                    {color: colors.textPrimary, backgroundColor: colors.borderLight},
                  ]}
                >
                  {request.issued_on}
                </Text>
              </View>
            )}
          </View>

          <Text style={[styles.purposeLabel, {color: colors.textSecondary}]}>
            {STRINGS.labelPurpose.replace(' *', '')}
          </Text>
          {editing ? (
            <View style={styles.editSection}>
              <ThemedTextInput
                label=""
                value={purposeText}
                onChangeText={text => {
                  setPurposeText(text);
                  // Only debounce-validate after initial error shown
                  if (purposeError) {
                    debouncedValidate(text);
                  }
                }}
                onBlur={() => setPurposeError(validatePurpose(purposeText))}
                multiline
                numberOfLines={4}
                error={purposeError}
                accessibilityLabel="Edit purpose"
                accessibilityHint="Enter the updated purpose text"
              />
              <CharacterCounter current={purposeText.trim().length} minimum={50} />
              {!!purposeError && (
                <RNText accessibilityRole="alert" style={srOnly}>
                  {purposeError}
                </RNText>
              )}
              <View style={styles.editButtons}>
                <Button
                  mode="contained"
                  onPress={handleSavePurpose}
                  style={[styles.saveButton, {backgroundColor: colors.primary}]}
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
                    if (debounceRef.current) {
                      clearTimeout(debounceRef.current);
                    }
                  }}
                  style={[styles.cancelButton, {borderColor: colors.border}]}
                  textColor={colors.textSecondary}
                >
                  {STRINGS.buttonCancel}
                </Button>
              </View>
            </View>
          ) : (
            <View>
              <View style={[styles.purposeBox, {backgroundColor: colors.borderLight}]}>
                <Text style={[styles.purposeText, {color: colors.textPrimary}]}>
                  {request.purpose}
                </Text>
              </View>
              {canEdit && (
                <Button
                  mode="outlined"
                  onPress={() => setEditing(true)}
                  style={[styles.editButton, {borderColor: colors.primary}]}
                  textColor={colors.primary}
                  icon={({size, color}) => <Icon name="pencil" size={size} color={color} />}
                >
                  {STRINGS.buttonEditPurpose}
                </Button>
              )}
            </View>
          )}
        </Card.Content>
      </Card>

      {isDone && (
        <Card
          style={[
            styles.documentCard,
            {backgroundColor: colors.surface, borderColor: colors.border},
          ]}
        >
          <Card.Content style={styles.documentContent}>
            <Text style={[styles.documentTitle, {color: colors.textSecondary}]}>
              Certificate Document
            </Text>
            <View style={styles.documentBody}>
              <Icon name="file-document-outline" size={40} color={colors.primary} />
              <Text style={[styles.documentName, {color: colors.textPrimary}]}>
                Certificate_Issued.pdf
              </Text>
              <Text style={[styles.documentDesc, {color: colors.textSecondary}]}>
                The certificate has been generated and is ready.
              </Text>
              <Button
                mode="outlined"
                onPress={() => navigation.navigate('PdfPreview')}
                style={[styles.downloadButton, {borderColor: colors.primary}]}
                textColor={colors.primary}
                icon={({size, color}) => <Icon name="eye-outline" size={size} color={color} />}
              >
                {STRINGS.buttonPreviewPdf}
              </Button>
            </View>
          </Card.Content>
        </Card>
      )}

      {!isDone && (
        <Card style={[styles.messageCard, {backgroundColor: colors.surface}]}>
          <Card.Content>
            <Text style={[styles.messageText, {color: colors.textSecondary}]}>
              {STRINGS.messageCertificateNotIssued}
            </Text>
          </Card.Content>
        </Card>
      )}

      <SuccessModal
        visible={showSuccessModal}
        title={STRINGS.messageSuccess}
        message={STRINGS.messagePurposeUpdated}
        buttonText={STRINGS.messageOk}
        onPress={handleSuccessModalClose}
      />
    </ScrollView>
  );
};

export default RequestDetailsScreen;
