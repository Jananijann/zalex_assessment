import React from 'react';
import {ScrollView, Alert} from 'react-native';
import {STRINGS} from '../../../../shared/constants/strings';
import {useColors} from '../../../../theme';
import {announceForAccessibility} from '../../../../shared/utils/accessibility';
import {useRequestForm} from '../../hooks/useRequestForm';
import CertificateForm from '../../components/CertificateForm';
import {styles} from './styles';

interface Props {
  navigation: any;
}

const RequestCertificateScreen: React.FC<Props> = ({navigation}) => {
  const colors = useColors();
  const form = useRequestForm();

  const handleSubmit = async () => {
    const success = await form.handleSubmit();
    if (success) {
      announceForAccessibility(STRINGS.messageSubmitSuccess);
      Alert.alert(STRINGS.messageSuccess, STRINGS.messageSubmitSuccess, [
        {text: STRINGS.messageOk, onPress: () => navigation.goBack()},
      ]);
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
    </ScrollView>
  );
};

export default RequestCertificateScreen;
