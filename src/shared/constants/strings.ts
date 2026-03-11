export const STRINGS = {
  appName: 'ZalexCert',

  // Screen titles
  screenTitleRequests: 'Certificate Requests',
  screenTitleNewRequest: 'New Request',
  screenTitleRequestDetails: 'Request Details',
  screenTitlePdfPreview: 'Certificate Preview',

  // Form labels
  labelAddressTo: 'Address To *',
  labelPurpose: 'Purpose *',
  labelIssuedOn: 'Issued On *',
  labelEmployeeId: 'Employee ID *',
  placeholderAddressTo: 'Enter address',
  placeholderPurpose: 'Describe the purpose of this certificate (min 50 characters)',
  placeholderEmployeeId: 'Enter your ID',

  // Validation messages
  errorAddressToRequired: 'Address To is required.',
  errorAddressToWhitespace: 'Address To cannot be only whitespace.',
  errorAddressToInvalid: 'Address To must contain only alphanumeric characters and spaces.',
  errorPurposeRequired: 'Purpose is required.',
  errorPurposeMinLength: 'Purpose must be at least 50 characters.',
  errorPurposeWhitespace: 'Purpose cannot be only whitespace.',
  errorIssuedOnRequired: 'Issued On is required.',
  errorIssuedOnFormat: 'Issued On must be in MM/DD/YYYY format.',
  errorIssuedOnInvalid: 'Issued On must be a valid date.',
  errorIssuedOnFuture: 'Issued On must be a future date.',
  errorEmployeeIdRequired: 'Employee ID is required.',
  errorEmployeeIdNumeric: 'Employee ID must be numeric only.',
  errorEmployeeIdWhitespace: 'Employee ID cannot be only whitespace.',

  // Buttons
  buttonSubmit: 'Submit Request',
  buttonSave: 'Save',
  buttonCancel: 'Cancel',
  buttonApplyFilters: 'Apply',
  buttonClearFilters: 'Clear',
  buttonEditPurpose: 'Edit Purpose',
  buttonPreviewPdf: 'Preview PDF',
  buttonSelectDate: 'Select Date',

  // Status labels
  statusNew: 'New',
  statusPending: 'Pending',
  statusUnderReview: 'Under Review',
  statusDone: 'Done',

  // Filter labels
  filterReferenceNo: 'Reference No',
  filterAddressTo: 'Address To',
  filterStatus: 'Status',
  filterAllStatuses: 'All Statuses',
  searchPlaceholder: 'Search by reference number...',
  sortByLabel: 'Sort by:',
  sortIssuedOn: 'Date',
  sortStatus: 'Status',

  // Detail labels
  labelReferenceNo: 'Reference Number',
  labelStatus: 'Status',

  // Messages
  messageNoRequests: 'No certificate requests found.',
  messageCertificateNotIssued: 'Certificate is yet to be issued.',
  messageSubmitSuccess: 'Certificate request submitted successfully.',
  messageSubmitError: 'Failed to submit request. Please try again.',
  messagePurposeUpdated: 'Purpose updated successfully.',
  messageSuccess: 'Success',
  messageError: 'Error',
  messageOk: 'OK',

  // Character counter
  charCounterFormat: (current: number, min: number) => `${current}/${min} characters`,

  // Dashboard
  dashboardSummary: 'Summary',

  // Empty state
  emptyStateTitle: 'No Requests Yet',
  emptyStateDescription: "You haven't submitted any certificate requests.",
  emptyStateButton: 'Create Request',

  // Error state
  errorStateTitle: 'Something went wrong',
  errorStateRetry: 'Retry',

  // Pull to refresh
  refreshing: 'Refreshing...',
};
