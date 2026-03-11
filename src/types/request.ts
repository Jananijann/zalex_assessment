export interface CertificateRequest {
  reference_no?: string;
  address_to: string;
  purpose: string;
  issued_on: string;
  employee_id: string;
  status?: string;
}

export interface CertificateState {
  requests: CertificateRequest[];
  loading: boolean;
  error: string | null;
  submitLoading: boolean;
  submitError: string | null;
}

export interface ValidationErrors {
  address_to?: string;
  purpose?: string;
  issued_on?: string;
  employee_id?: string;
}
