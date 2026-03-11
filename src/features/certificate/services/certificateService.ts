import {api} from '../../../shared/services/api';
import {ENDPOINTS} from '../../../shared/services/endpoints';
import {ApiResponse} from '../../../shared/types';
import {CertificateRequest} from './types';

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
