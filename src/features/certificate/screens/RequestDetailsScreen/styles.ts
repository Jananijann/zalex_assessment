import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/styles/colors';
import {SPACING} from '../../../../shared/styles';
import {SHADOWS} from '../../../../shared/styles/shadows';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  card: {
    margin: SPACING.lg,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    ...SHADOWS.md,
  },
  label: {
    color: COLORS.textSecondary,
    marginTop: SPACING.lg,
    marginBottom: SPACING.xs,
    fontSize: 11,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    marginBottom: SPACING.sm,
    color: COLORS.textPrimary,
    fontSize: 15,
    lineHeight: 22,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  previewButton: {
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  editSection: {
    marginTop: SPACING.sm,
  },
  editInput: {
    backgroundColor: COLORS.surface,
  },
  editButtons: {
    flexDirection: 'row',
    marginTop: SPACING.md,
  },
  saveButton: {
    marginRight: SPACING.sm,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  cancelButton: {
    borderRadius: 10,
    borderColor: COLORS.border,
  },
  editButton: {
    marginTop: SPACING.md,
    alignSelf: 'flex-start',
    borderRadius: 10,
    borderColor: COLORS.primary,
  },
  messageCard: {
    margin: SPACING.lg,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    ...SHADOWS.sm,
  },
  messageText: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    fontStyle: 'italic',
    paddingVertical: SPACING.lg,
    fontSize: 14,
    lineHeight: 20,
  },
});
