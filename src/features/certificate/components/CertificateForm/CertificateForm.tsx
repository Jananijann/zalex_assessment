import React, {useState} from 'react';
import {View, Platform, Pressable, Text as RNText} from 'react-native';
import {Button, Card} from 'react-native-paper';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {STRINGS} from '../../../../shared/constants/strings';
import {useColors} from '../../../../shared/theme';
import CharacterCounter from '../../../../shared/components/CharacterCounter';
import ThemedTextInput from '../../../../shared/components/ThemedTextInput';
import {styles} from './styles';
import {CertificateFormProps} from './types';

const srOnly = {position: 'absolute' as const, width: 1, height: 1, overflow: 'hidden' as const};

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
  const colors = useColors();
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
    <Card style={[styles.formCard, {backgroundColor: colors.surface}]}>
      <Card.Content>
        <ThemedTextInput
          label={STRINGS.labelAddressTo}
          value={addressTo}
          onChangeText={onChangeAddressTo}
          onBlur={() => onBlur('address_to')}
          placeholder={STRINGS.placeholderAddressTo}
          multiline
          numberOfLines={3}
          error={addressToError}
          accessibilityLabel={STRINGS.labelAddressTo}
          accessibilityHint={STRINGS.placeholderAddressTo}
        />
        {!!addressToError && (
          <RNText accessibilityRole="alert" style={srOnly}>
            {errors.address_to}
          </RNText>
        )}

        <ThemedTextInput
          label={STRINGS.labelPurpose}
          value={purpose}
          onChangeText={onChangePurpose}
          onBlur={() => onBlur('purpose')}
          placeholder={STRINGS.placeholderPurpose}
          multiline
          numberOfLines={4}
          error={purposeError}
          accessibilityLabel={STRINGS.labelPurpose}
          accessibilityHint={STRINGS.placeholderPurpose}
        />
        <CharacterCounter current={purpose.trim().length} minimum={50} />
        {!!purposeError && (
          <RNText accessibilityRole="alert" style={srOnly}>
            {errors.purpose}
          </RNText>
        )}

        <View style={styles.rowFields}>
          <View style={styles.halfField}>
            <Pressable
              onPress={() => {
                onBlur('issued_on');
                setShowDatePicker(true);
              }}
              accessibilityRole="button"
              accessibilityLabel={STRINGS.labelIssuedOn}
              accessibilityHint="Tap to select a date"
            >
              <ThemedTextInput
                label={STRINGS.labelIssuedOn}
                value={issuedOn}
                placeholder="MM/DD/YYYY"
                error={issuedOnError}
                onPress={() => {
                  onBlur('issued_on');
                  setShowDatePicker(true);
                }}
              />
            </Pressable>
          </View>

          <View style={styles.halfField}>
            <ThemedTextInput
              label={STRINGS.labelEmployeeId}
              value={employeeId}
              onChangeText={onChangeEmployeeId}
              onBlur={() => onBlur('employee_id')}
              placeholder={STRINGS.placeholderEmployeeId}
              keyboardType="numeric"
              error={employeeIdError}
              accessibilityLabel={STRINGS.labelEmployeeId}
              accessibilityHint={STRINGS.placeholderEmployeeId}
            />
            {!!employeeIdError && (
              <RNText accessibilityRole="alert" style={srOnly}>
                {errors.employee_id}
              </RNText>
            )}
          </View>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={parseDateFromString()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            minimumDate={tomorrow}
            onChange={handleDateChange}
          />
        )}

        <Button
          mode="contained"
          onPress={onSubmit}
          disabled={!formValid || submitting}
          loading={submitting}
          style={[styles.submitButton, {backgroundColor: colors.primary}]}
          labelStyle={[styles.submitButtonLabel, {color: colors.white}]}
          accessibilityLabel={submitting ? 'Submitting request' : STRINGS.buttonSubmit}
          accessibilityHint="Double tap to submit the certificate request"
          icon={({size, color}) => <Icon name="send" size={size} color={color} />}
        >
          {STRINGS.buttonSubmit}
        </Button>
      </Card.Content>
    </Card>
  );
};

export default CertificateForm;
