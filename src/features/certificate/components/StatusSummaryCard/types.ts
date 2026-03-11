import {CertificateRequest} from '../../services/types';

export interface StatusSummaryCardProps {
  requests: CertificateRequest[];
  activeStatus: string | null;
  onStatusPress: (status: string | null) => void;
}
