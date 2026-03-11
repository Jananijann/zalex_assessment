import {filterRequests, sortRequests} from '../helpers/filters';
import {CertificateRequest} from '../services/types';

const mockRequests: CertificateRequest[] = [
  {
    reference_no: 'REF001',
    address_to: 'Embassy of Neptune',
    purpose: 'Visa Application for travel purposes',
    issued_on: '12/09/2022',
    employee_id: '123456',
    status: 'New',
  },
  {
    reference_no: 'REF002',
    address_to: 'Immigration Office',
    purpose: 'Work permit renewal',
    issued_on: '06/15/2023',
    employee_id: '789012',
    status: 'Done',
  },
  {
    reference_no: 'REF003',
    address_to: 'Embassy of Mars',
    purpose: 'Study abroad application',
    issued_on: '03/20/2023',
    employee_id: '345678',
    status: 'In Progress',
  },
];

describe('filterRequests', () => {
  it('returns all requests when no filters applied', () => {
    const result = filterRequests(mockRequests, {});
    expect(result).toHaveLength(3);
  });

  it('filters by exact reference_no', () => {
    const result = filterRequests(mockRequests, {reference_no: 'REF001'});
    expect(result).toHaveLength(1);
    expect(result[0].reference_no).toBe('REF001');
  });

  it('returns empty when reference_no does not match', () => {
    const result = filterRequests(mockRequests, {reference_no: 'REF999'});
    expect(result).toHaveLength(0);
  });

  it('filters by address_to (contains, case-insensitive)', () => {
    const result = filterRequests(mockRequests, {address_to: 'embassy'});
    expect(result).toHaveLength(2);
  });

  it('filters by exact status', () => {
    const result = filterRequests(mockRequests, {status: 'Done'});
    expect(result).toHaveLength(1);
    expect(result[0].status).toBe('Done');
  });

  it('combines multiple filters', () => {
    const result = filterRequests(mockRequests, {
      address_to: 'embassy',
      status: 'New',
    });
    expect(result).toHaveLength(1);
    expect(result[0].reference_no).toBe('REF001');
  });
});

describe('sortRequests', () => {
  it('sorts by issued_on ascending', () => {
    const result = sortRequests(mockRequests, 'issued_on', 'asc');
    expect(result[0].reference_no).toBe('REF001');
    expect(result[1].reference_no).toBe('REF003');
    expect(result[2].reference_no).toBe('REF002');
  });

  it('sorts by issued_on descending', () => {
    const result = sortRequests(mockRequests, 'issued_on', 'desc');
    expect(result[0].reference_no).toBe('REF002');
    expect(result[2].reference_no).toBe('REF001');
  });

  it('sorts by status ascending', () => {
    const result = sortRequests(mockRequests, 'status', 'asc');
    expect(result[0].status).toBe('Done');
    expect(result[1].status).toBe('In Progress');
    expect(result[2].status).toBe('New');
  });

  it('sorts by status descending', () => {
    const result = sortRequests(mockRequests, 'status', 'desc');
    expect(result[0].status).toBe('New');
    expect(result[2].status).toBe('Done');
  });

  it('does not mutate the original array', () => {
    const original = [...mockRequests];
    sortRequests(mockRequests, 'issued_on', 'asc');
    expect(mockRequests).toEqual(original);
  });
});
