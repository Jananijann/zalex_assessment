import React, {useState} from 'react';
import {View, Platform, Text as RNText} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {STRINGS} from '../../../../shared/constants/strings';
import {COLORS} from '../../../../shared/styles/colors';
import {ValidationErrors} from '../../../../types';
import CharacterCounter from '../CharacterCounter';
import {styles} from './styles';

const srOnly = {position: 'absolute' as const, width: 1, height: 1, overflow: 'hidden' as const};

interface CertificateFormProps {
  addressTo: string;
  purpose: string;
  issuedOn: string;
  employeeId: string;
  errors: ValidationErrors;
  touched: Record<string, boolean>;
  formValid: boolean;
  submitting: boolean;
  onChangeAddressTo: (value: string) => void;
  onChangePurpose: (value: string) => void;
  onChangeIssuedOn: (value: string) => void;
  onChangeEmployeeId: (value: string) => void;
  onBlur: (field: keyof ValidationErrors) => void;
  onSubmit: () => void;
}

const CertificateForm: React.FC<CertificateFormProps> = ({
  addressTo,
  purpose,
  issuedOn,
  employeeId,
  errors,
  touched,
  formValid,
  submitting,
  onChangeAddressTo,
  onChangePurpose,
  onChangeIssuedOn,
  onChangeEmployeeId,
  onBlur,
  onSubmit,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleDateChange = (_event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const year = selectedDate.getFullYear();
      onChangeIssuedOn(`${month}/${day}/${year}`);
    }
  };

  const parseDateFromString = (): Date => {
    if (issuedOn) {
      const parts = issuedOn.split('/');
      if (parts.length === 3) {
        const [m, d, y] = parts.map(Number);
        const date = new Date(y, m - 1, d);
        if (!isNaN(date.getTime())) {
          return date;
        }
      }
    }
    return tomorrow;
  };

  const addressToError = touched.address_to ? errors.address_to : undefined;
  const purposeError = touched.purpose ? errors.purpose : undefined;
  const issuedOnError = touched.issued_on ? errors.issued_on : undefined;
  const employeeIdError = touched.employee_id ? errors.employee_id : undefined;

  return (
    <View style={styles.container}>
      <TextInput
        label={STRINGS.labelAddressTo}
        value={addressTo}
        onChangeText={onChangeAddressTo}
        onBlur={() => onBlur('address_to')}
        mode="outlined"
        style={styles.input}
        placeholder={STRINGS.placeholderAddressTo}
        multiline
        numberOfLines={2}
        error={!!addressToError}
        outlineColor={COLORS.border}
        activeOutlineColor={COLORS.primary}
        accessibilityLabel={STRINGS.labelAddressTo}
        accessibilityHint={STRINGS.placeholderAddressTo}
      />
      {!!addressToError && (
        <RNText accessibilityRole="alert" style={srOnly}>
          {errors.address_to}
        </RNText>
      )}
      <HelperText type="error" visible={!!addressToError}>
        {errors.address_to}
      </HelperText>

      <TextInput
        label={STRINGS.labelPurpose}
        value={purpose}
        onChangeText={onChangePurpose}
        onBlur={() => onBlur('purpose')}
        mode="outlined"
        style={styles.input}
        placeholder={STRINGS.placeholderPurpose}
        multiline
        numberOfLines={4}
        error={!!purposeError}
        outlineColor={COLORS.border}
        activeOutlineColor={COLORS.primary}
        accessibilityLabel={STRINGS.labelPurpose}
        accessibilityHint={STRINGS.placeholderPurpose}
      />
      <CharacterCounter current={purpose.trim().length} minimum={50} />
      {!!purposeError && (
        <RNText accessibilityRole="alert" style={srOnly}>
          {errors.purpose}
        </RNText>
      )}
      <HelperText type="error" visible={!!purposeError}>
        {errors.purpose}
      </HelperText>

      <View style={styles.dateRow}>
        <TextInput
          label={STRINGS.labelIssuedOn}
          value={issuedOn}
          mode="outlined"
          style={styles.dateInput}
          editable={false}
          error={!!issuedOnError}
          outlineColor={COLORS.border}
          activeOutlineColor={COLORS.primary}
          accessibilityLabel={STRINGS.labelIssuedOn}
          accessibilityHint="Tap the calendar icon to select a date"
          right={
            <TextInput.Icon
              icon="calendar"
              onPress={() => setShowDatePicker(true)}
              color={COLORS.primary}
              accessibilityLabel={STRINGS.buttonSelectDate}
            />
          }
        />
      </View>
      {!!issuedOnError && (
        <RNText accessibilityRole="alert" style={srOnly}>
          {errors.issued_on}
        </RNText>
      )}
      <HelperText type="error" visible={!!issuedOnError}>
        {errors.issued_on}
      </HelperText>

      {showDatePicker && (
        <DateTimePicker
          value={parseDateFromString()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          minimumDate={tomorrow}
          onChange={handleDateChange}
        />
      )}

      <TextInput
        label={STRINGS.labelEmployeeId}
        value={employeeId}
        onChangeText={onChangeEmployeeId}
        onBlur={() => onBlur('employee_id')}
        mode="outlined"
        style={styles.input}
        placeholder={STRINGS.placeholderEmployeeId}
        keyboardType="numeric"
        error={!!employeeIdError}
        outlineColor={COLORS.border}
        activeOutlineColor={COLORS.primary}
        accessibilityLabel={STRINGS.labelEmployeeId}
        accessibilityHint={STRINGS.placeholderEmployeeId}
      />
      {!!employeeIdError && (
        <RNText accessibilityRole="alert" style={srOnly}>
          {errors.employee_id}
        </RNText>
      )}
      <HelperText type="error" visible={!!employeeIdError}>
        {errors.employee_id}
      </HelperText>

      <Button
        mode="contained"
        onPress={onSubmit}
        disabled={!formValid || submitting}
        loading={submitting}
        style={styles.submitButton}
        labelStyle={styles.submitButtonLabel}
        accessibilityLabel={submitting ? 'Submitting request' : STRINGS.buttonSubmit}
        accessibilityHint="Double tap to submit the certificate request"
        icon={({size, color}) => <Icon name="send" size={size} color={color} />}
      >
        {STRINGS.buttonSubmit}
      </Button>
    </View>
  );
};

export default CertificateForm;
