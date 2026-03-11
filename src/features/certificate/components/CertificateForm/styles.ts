import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/styles/colors';
import {SPACING} from '../../../../shared/styles/spacing';
import {SHADOWS} from '../../../../shared/styles/shadows';

export const styles = StyleSheet.create({
  formCard: {
    margin: SPACING.lg,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    ...SHADOWS.md,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xl,
  },
  input: {
    marginBottom: SPACING.xs,
    backgroundColor: COLORS.surface,
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
    backgroundColor: COLORS.primary,
  },
  submitButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
});
