import {StyleSheet} from 'react-native';
import {SPACING} from '../../../../shared/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    borderRadius: 8,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  loadingText: {
    marginTop: SPACING.md,
    fontSize: 14,
  },
  errorText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: SPACING.md,
  },
  errorMessage: {
    fontSize: 14,
    marginTop: SPACING.sm,
    textAlign: 'center',
  },
  retryButton: {
    marginTop: SPACING.lg,
  },
});
