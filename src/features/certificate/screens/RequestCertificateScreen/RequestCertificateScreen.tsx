import React, {useState} from 'react';
import {ScrollView, Alert} from 'react-native';
import {NavProps} from '@shared/types/common';
import {STRINGS} from '../../../../shared/constants/strings';
import {useColors} from '../../../../shared/theme';
import {announceForAccessibility} from '../../../../shared/utils/accessibility';
import {useRequestForm} from '../../hooks/useRequestForm';
import CertificateForm from '../../components/CertificateForm';
import SuccessModal from '../../../../shared/components/SuccessModal';
import {styles} from './styles';

const RequestCertificateScreen: React.FC<NavProps> = ({navigation}) => {
  const colors = useColors();
  const form = useRequestForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    const success = await form.handleSubmit();
    if (success) {
      announceForAccessibility(STRINGS.messageSubmitSuccess);
      setShowSuccess(true);
    } else if (!form.formValid) {
      announceForAccessibility('Please fix the form errors before submitting');
    } else {
      announceForAccessibility(STRINGS.messageSubmitError);
      Alert.alert(STRINGS.messageError, STRINGS.messageSubmitError);
    }
  };

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}
      keyboardShouldPersistTaps="handled"
    >
      <CertificateForm
        addressTo={form.addressTo}
        purpose={form.purpose}
        issuedOn={form.issuedOn}
        employeeId={form.employeeId}
        errors={form.errors}
        touched={form.touched}
        formValid={form.formValid}
        submitting={form.submitting}
        onChangeAddressTo={form.handleChangeAddressTo}
        onChangePurpose={form.handleChangePurpose}
        onChangeIssuedOn={form.handleChangeIssuedOn}
        onChangeEmployeeId={form.handleChangeEmployeeId}
        onBlur={form.handleBlur}
        onSubmit={handleSubmit}
      />
      <SuccessModal
        visible={showSuccess}
        title={STRINGS.messageSuccess}
        message={STRINGS.messageSubmitSuccess}
        buttonText={STRINGS.messageOk}
        onPress={() => {
          setShowSuccess(false);
          navigation.goBack();
        }}
      />
    </ScrollView>
  );
};

export default RequestCertificateScreen;
