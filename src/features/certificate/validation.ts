import {ValidationErrors} from '../../types';
import {STRINGS} from '../../shared/constants/strings';
export type {ValidationErrors};

export function validateAddressTo(value: string): string | undefined {
  if (!value || value.length === 0) {
    return STRINGS.errorAddressToRequired;
  }
  if (value.trim().length === 0) {
    return STRINGS.errorAddressToWhitespace;
  }
  if (!/^[a-zA-Z0-9\s.,'-]+$/.test(value.trim())) {
    return STRINGS.errorAddressToInvalid;
  }
  return undefined;
}

export function validatePurpose(value: string): string | undefined {
  if (!value || value.length === 0) {
    return STRINGS.errorPurposeRequired;
  }
  if (value.trim().length === 0) {
    return STRINGS.errorPurposeWhitespace;
  }
  if (value.trim().length < 50) {
    return STRINGS.errorPurposeMinLength;
  }
  return undefined;
}

export function validateIssuedOn(value: string): string | undefined {
  if (!value) {
    return STRINGS.errorIssuedOnRequired;
  }
  const parts = value.split('/');
  if (parts.length !== 3) {
    return STRINGS.errorIssuedOnFormat;
  }
  const [month, day, year] = parts.map(Number);
  if (isNaN(month) || isNaN(day) || isNaN(year)) {
    return STRINGS.errorIssuedOnFormat;
  }
  const date = new Date(year, month - 1, day);
  if (isNaN(date.getTime()) || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return STRINGS.errorIssuedOnInvalid;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date <= today) {
    return STRINGS.errorIssuedOnFuture;
  }
  return undefined;
}

export function validateEmployeeId(value: string): string | undefined {
  if (!value || value.length === 0) {
    return STRINGS.errorEmployeeIdRequired;
  }
  if (value.trim().length === 0) {
    return STRINGS.errorEmployeeIdWhitespace;
  }
  if (!/^\d+$/.test(value.trim())) {
    return STRINGS.errorEmployeeIdNumeric;
  }
  return undefined;
}

export function validateForm(fields: {
  address_to: string;
  purpose: string;
  issued_on: string;
  employee_id: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};
  const addressError = validateAddressTo(fields.address_to);
  if (addressError) {
    errors.address_to = addressError;
  }
  const purposeError = validatePurpose(fields.purpose);
  if (purposeError) {
    errors.purpose = purposeError;
  }
  const issuedOnError = validateIssuedOn(fields.issued_on);
  if (issuedOnError) {
    errors.issued_on = issuedOnError;
  }
  const employeeIdError = validateEmployeeId(fields.employee_id);
  if (employeeIdError) {
    errors.employee_id = employeeIdError;
  }
  return errors;
}

export function isFormValid(errors: ValidationErrors): boolean {
  return Object.keys(errors).length === 0;
}
