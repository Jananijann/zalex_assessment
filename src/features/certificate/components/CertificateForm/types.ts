import {ValidationErrors} from '@features/certificate/services/types';

export interface CertificateFormProps {
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
