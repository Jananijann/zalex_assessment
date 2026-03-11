import {api} from '../../../services/api';
import {ENDPOINTS} from '../../../services/endpoints';
import {CertificateRequest, ApiResponse} from '../../../types';

export async function createCertificateRequest(
  request: Omit<CertificateRequest, 'reference_no' | 'status'>,
): Promise<ApiResponse> {
  const response = await api.post(ENDPOINTS.requestCertificate, {
    address_to: request.address_to,
    purpose: request.purpose,
    issued_on: request.issued_on,
    employee_id: request.employee_id,
  });
  return response.data;
}

export async function fetchCertificateRequests(): Promise<CertificateRequest[]> {
  const response = await api.get(ENDPOINTS.requestList);
  return response.data;
}
