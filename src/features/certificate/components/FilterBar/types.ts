import {FilterCriteria, SortField, SortOrder} from '@features/certificate/utils/common';

export interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (text: string) => void;
  onApplyFilters: (criteria: FilterCriteria) => void;
  onClearFilters: () => void;
  sortField: SortField;
  sortOrder: SortOrder;
  onSort: (field: SortField, order: SortOrder) => void;
}
