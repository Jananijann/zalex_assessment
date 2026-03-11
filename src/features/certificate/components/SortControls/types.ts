export type SortField = 'issued_on' | 'status';
export type SortOrder = 'asc' | 'desc';

export interface SortControlsProps {
  currentField: SortField;
  currentOrder: SortOrder;
  onSort: (field: SortField, order: SortOrder) => void;
}
