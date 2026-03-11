import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/styles/colors';
import {SPACING} from '../../../../shared/styles';
import {SHADOWS} from '../../../../shared/styles/shadows';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
    padding: SPACING.lg,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    ...SHADOWS.sm,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginLeft: SPACING.sm,
  },
  inputsRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },
  inputWrapper: {
    flex: 1,
  },
  statusWrapper: {
    flex: 1,
    marginBottom: SPACING.md,
  },
  statusSortRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.xs,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    backgroundColor: COLORS.surface,
    height: 38,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 13,
    color: COLORS.textPrimary,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 0,
    height: 38,
  },
  dropdownButton: {
    borderColor: COLORS.border,
    borderRadius: 8,
    height: 38,
  },
  dropdownContent: {
    height: 38,
  },
  dropdownLabel: {
    fontSize: 12,
    color: COLORS.textPrimary,
  },
  sortSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.textSecondary,
    marginRight: SPACING.sm,
  },
  sortChips: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  sortChip: {
    borderRadius: 20,
    borderColor: COLORS.border,
  },
  sortChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  sortChipLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  sortChipLabelActive: {
    color: COLORS.white,
  },
  clearButton: {
    alignSelf: 'flex-end',
    marginTop: SPACING.sm,
  },
});
