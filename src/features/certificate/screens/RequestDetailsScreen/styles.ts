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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  refRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  refNo: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.borderLight,
    marginBottom: SPACING.lg,
  },
  twoColumn: {
    flexDirection: 'row',
    gap: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  columnItem: {
    flex: 1,
  },
  columnHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: SPACING.xs,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
  value: {
    color: COLORS.textPrimary,
    fontSize: 15,
    lineHeight: 22,
    backgroundColor: COLORS.borderLight,
    padding: SPACING.md,
    borderRadius: 8,
  },
  purposeLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '500',
    marginBottom: SPACING.xs,
  },
  purposeBox: {
    backgroundColor: COLORS.borderLight,
    padding: SPACING.md,
    borderRadius: 8,
  },
  purposeText: {
    color: COLORS.textPrimary,
    fontSize: 15,
    lineHeight: 22,
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
  documentCard: {
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.sm,
  },
  documentContent: {
    alignItems: 'center',
  },
  documentTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: SPACING.lg,
    alignSelf: 'flex-start',
  },
  documentBody: {
    alignItems: 'center',
    paddingVertical: SPACING.md,
  },
  documentName: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginTop: SPACING.sm,
  },
  documentDesc: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
    marginBottom: SPACING.lg,
    textAlign: 'center',
  },
  downloadButton: {
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
});
