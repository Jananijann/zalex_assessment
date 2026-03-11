export interface FilterCriteria {
  reference_no?: string;
  address_to?: string;
  status?: string;
}

export type SortField = 'issued_on' | 'status';
export type SortOrder = 'asc' | 'desc';

export type RequestStatus = 'New' | 'Pending' | 'Under Review' | 'Done';
