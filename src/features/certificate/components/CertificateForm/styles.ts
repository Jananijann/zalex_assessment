import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/styles/colors';
import {SPACING} from '../../../../shared/styles/spacing';

export const styles = StyleSheet.create({
  container: {
    padding: SPACING.lg,
  },
  input: {
    marginBottom: SPACING.xs,
    backgroundColor: COLORS.surface,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  dateInput: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  dateButton: {
    marginLeft: SPACING.sm,
    marginTop: SPACING.sm,
  },
  submitButton: {
    marginTop: SPACING.xxl,
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
