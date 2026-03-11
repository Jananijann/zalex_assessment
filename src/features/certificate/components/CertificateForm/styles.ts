import {StyleSheet} from 'react-native';
import {SPACING} from '../../../../shared/styles/spacing';
import {SHADOWS} from '../../../../shared/styles/shadows';

export const styles = StyleSheet.create({
  formCard: {
    margin: SPACING.lg,
    borderRadius: 12,
    ...SHADOWS.md,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: SPACING.xl,
  },
  rowFields: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  halfField: {
    flex: 1,
  },
  submitButton: {
    marginTop: SPACING.xl,
    borderRadius: 10,
    paddingVertical: SPACING.sm,
  },
  submitButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});
