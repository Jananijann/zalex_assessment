import {CertificateRequest} from '../services/types';
import {FilterCriteria, SortField, SortOrder} from '../utils/common';

export type {FilterCriteria, SortField, SortOrder};

export function filterRequests(
  requests: CertificateRequest[],
  criteria: FilterCriteria,
): CertificateRequest[] {
  return requests.filter(request => {
    if (criteria?.reference_no && request?.reference_no !== criteria?.reference_no) {
      return false;
    }
    if (
      criteria?.address_to &&
      !(request?.address_to || '').toLowerCase().includes(criteria?.address_to?.toLowerCase())
    ) {
      return false;
    }
    if (criteria?.status && request?.status !== criteria?.status) {
      return false;
    }
    return true;
  });
}

export function sortRequests(
  requests: CertificateRequest[],
  field: SortField,
  order: SortOrder,
): CertificateRequest[] {
  const sorted = [...requests].sort((a, b) => {
    if (field === 'issued_on') {
      const parseDate = (dateStr: string | undefined | null) => {
        if (!dateStr) {
          return 0;
        }
        const parts = dateStr.split('/');
        if (parts.length !== 3) {
          return 0;
        }
        const [month, day, year] = parts.map(Number);
        return new Date(year, month - 1, day).getTime();
      };
      const dateA = parseDate(a.issued_on);
      const dateB = parseDate(b.issued_on);
      return dateA - dateB;
    }
    if (field === 'status') {
      const statusA = a.status || '';
      const statusB = b.status || '';
      return statusA.localeCompare(statusB);
    }
    return 0;
  });
  if (order === 'desc') {
    sorted.reverse();
  }
  return sorted;
}
