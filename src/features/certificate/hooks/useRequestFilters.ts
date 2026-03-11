import {useState, useCallback, useMemo} from 'react';
import {CertificateRequest, FilterCriteria, SortField, SortOrder} from '../../../types';
import {filterRequests, sortRequests} from '../filters';

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
    let result = requests;

    if (searchQuery.trim()) {
      result = result.filter(
        r =>
          r.reference_no && r.reference_no.toLowerCase().includes(searchQuery.toLowerCase().trim()),
      );
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
