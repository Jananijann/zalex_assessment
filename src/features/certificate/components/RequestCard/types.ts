import {CertificateRequest} from '@features/certificate/services/types';

export interface RequestCardProps {
  request: CertificateRequest;
  onPress: () => void;
}
