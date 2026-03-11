import {
  validateAddressTo,
  validatePurpose,
  validateIssuedOn,
  validateEmployeeId,
  validateForm,
  isFormValid,
} from '../features/certificate/validation';
import {STRINGS} from '../shared/constants/strings';

describe('validateAddressTo', () => {
  it('returns error when empty', () => {
    expect(validateAddressTo('')).toBe(STRINGS.errorAddressToRequired);
  });

  it('returns error when whitespace only', () => {
    expect(validateAddressTo('   ')).toBe(STRINGS.errorAddressToWhitespace);
  });

  it('returns error for invalid characters', () => {
    expect(validateAddressTo('Embassy @#$')).toBe(STRINGS.errorAddressToInvalid);
  });

  it('returns undefined when valid', () => {
    expect(validateAddressTo('Embassy')).toBeUndefined();
  });

  it('returns undefined for alphanumeric with spaces', () => {
    expect(validateAddressTo('Embassy of Neptune 123')).toBeUndefined();
  });
});

describe('validatePurpose', () => {
  it('returns error when empty', () => {
    expect(validatePurpose('')).toBe(STRINGS.errorPurposeRequired);
  });

  it('returns error when whitespace only', () => {
    expect(validatePurpose('   ')).toBe(STRINGS.errorPurposeWhitespace);
  });

  it('returns error when less than 50 characters', () => {
    expect(validatePurpose('Short purpose')).toBe(STRINGS.errorPurposeMinLength);
  });

  it('returns error when trimmed text is less than 50 characters', () => {
    const paddedShort = '  ' + 'a'.repeat(30) + '  ';
    expect(validatePurpose(paddedShort)).toBe(STRINGS.errorPurposeMinLength);
  });

  it('returns undefined when exactly 50 characters', () => {
    const fiftyChars = 'a'.repeat(50);
    expect(validatePurpose(fiftyChars)).toBeUndefined();
  });

  it('returns undefined when more than 50 characters', () => {
    const longPurpose = 'a'.repeat(100);
    expect(validatePurpose(longPurpose)).toBeUndefined();
  });
});

describe('validateIssuedOn', () => {
  it('returns error when empty', () => {
    expect(validateIssuedOn('')).toBe(STRINGS.errorIssuedOnRequired);
  });

  it('returns error for invalid format', () => {
    expect(validateIssuedOn('2022-12-01')).toBe(STRINGS.errorIssuedOnFormat);
  });

  it('returns error for non-numeric parts', () => {
    expect(validateIssuedOn('ab/cd/efgh')).toBe(STRINGS.errorIssuedOnFormat);
  });

  it('returns error for invalid date', () => {
    expect(validateIssuedOn('13/32/2022')).toBe(STRINGS.errorIssuedOnInvalid);
  });

  it('returns error for past date', () => {
    expect(validateIssuedOn('01/01/2020')).toBe(STRINGS.errorIssuedOnFuture);
  });

  it('returns error for today', () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    expect(validateIssuedOn(`${month}/${day}/${year}`)).toBe(STRINGS.errorIssuedOnFuture);
  });

  it('returns undefined for future date', () => {
    const future = new Date();
    future.setFullYear(future.getFullYear() + 1);
    const month = String(future.getMonth() + 1).padStart(2, '0');
    const day = String(future.getDate()).padStart(2, '0');
    const year = future.getFullYear();
    expect(validateIssuedOn(`${month}/${day}/${year}`)).toBeUndefined();
  });
});

describe('validateEmployeeId', () => {
  it('returns error when empty', () => {
    expect(validateEmployeeId('')).toBe(STRINGS.errorEmployeeIdRequired);
  });

  it('returns error when whitespace only', () => {
    expect(validateEmployeeId('   ')).toBe(STRINGS.errorEmployeeIdWhitespace);
  });

  it('returns error for non-numeric', () => {
    expect(validateEmployeeId('abc')).toBe(STRINGS.errorEmployeeIdNumeric);
  });

  it('returns error for alphanumeric', () => {
    expect(validateEmployeeId('123abc')).toBe(STRINGS.errorEmployeeIdNumeric);
  });

  it('returns undefined for numeric value', () => {
    expect(validateEmployeeId('123456')).toBeUndefined();
  });
});

describe('validateForm', () => {
  const futureDate = () => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${month}/${day}/${d.getFullYear()}`;
  };

  it('returns no errors for valid form', () => {
    const errors = validateForm({
      address_to: 'Embassy',
      purpose: 'a'.repeat(50),
      issued_on: futureDate(),
      employee_id: '123456',
    });
    expect(isFormValid(errors)).toBe(true);
  });

  it('returns all errors for empty form', () => {
    const errors = validateForm({
      address_to: '',
      purpose: '',
      issued_on: '',
      employee_id: '',
    });
    expect(isFormValid(errors)).toBe(false);
    expect(errors.address_to).toBeDefined();
    expect(errors.purpose).toBeDefined();
    expect(errors.issued_on).toBeDefined();
    expect(errors.employee_id).toBeDefined();
  });
});
