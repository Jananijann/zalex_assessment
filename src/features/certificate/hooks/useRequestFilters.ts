import {useState, useCallback, useMemo} from 'react';
import {CertificateRequest} from '../services/types';
import {filterRequests, sortRequests} from '../helpers/filters';

interface FilterCriteria {
  reference_no?: string;
  address_to?: string;
  status?: string;
}

type SortField = 'issued_on' | 'status';
type SortOrder = 'asc' | 'desc';

export function useRequestFilters(requests: CertificateRequest[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({});
  const [sortField, setSortField] = useState<SortField>('issued_on');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [showFilters, setShowFilters] = useState(false);

  const handleApplyFilters = useCallback((criteria: FilterCriteria) => {
    setFilterCriteria(criteria);
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilterCriteria({});
    setSearchQuery('');
  }, []);

  const handleSort = useCallback((field: SortField, order: SortOrder) => {
    setSortField(field);
    setSortOrder(order);
  }, []);

  const toggleFilters = useCallback(() => {
    setShowFilters(prev => !prev);
  }, []);

  const processedRequests = useMemo(() => {
    let result: CertificateRequest[] = (requests ?? []).filter(r => r && typeof r === 'object');

    const query = (searchQuery ?? '').toLowerCase().trim();

    if (query && result.length) {
      result = result.filter(r => String(r?.reference_no ?? '').toLowerCase() === query);
    }

    result = filterRequests(result, filterCriteria);
    result = sortRequests(result, sortField, sortOrder);

    return result;
  }, [requests, searchQuery, filterCriteria, sortField, sortOrder]);

  return {
    searchQuery,
    setSearchQuery,
    filterCriteria,
    sortField,
    sortOrder,
    showFilters,
    processedRequests,
    handleApplyFilters,
    handleClearFilters,
    handleSort,
    toggleFilters,
  };
}
