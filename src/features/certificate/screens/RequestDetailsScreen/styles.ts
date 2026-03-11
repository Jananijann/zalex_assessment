import {StyleSheet} from 'react-native';
import {SPACING} from '../../../../shared/styles';
import {SHADOWS} from '../../../../shared/styles/shadows';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: SPACING.lg,
    borderRadius: 12,
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
  },
  divider: {
    height: 1,
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
    fontSize: 12,
    fontWeight: '500',
  },
  value: {
    fontSize: 15,
    lineHeight: 22,
    padding: SPACING.md,
    borderRadius: 8,
  },
  purposeLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: SPACING.xs,
  },
  purposeBox: {
    padding: SPACING.md,
    borderRadius: 8,
  },
  purposeText: {
    fontSize: 15,
    lineHeight: 22,
  },
  editSection: {
    marginTop: SPACING.sm,
  },
  editButtons: {
    flexDirection: 'row',
    marginTop: SPACING.md,
  },
  saveButton: {
    marginRight: SPACING.sm,
    borderRadius: 10,
  },
  cancelButton: {
    borderRadius: 10,
  },
  editButton: {
    marginTop: SPACING.md,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  documentCard: {
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
    borderRadius: 12,
    borderWidth: 1,
    ...SHADOWS.sm,
  },
  documentContent: {
    alignItems: 'center',
  },
  documentTitle: {
    fontSize: 14,
    fontWeight: '600',
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
    marginTop: SPACING.sm,
  },
  documentDesc: {
    fontSize: 13,
    marginTop: SPACING.xs,
    marginBottom: SPACING.lg,
    textAlign: 'center',
  },
  downloadButton: {
    borderRadius: 10,
  },
  messageCard: {
    margin: SPACING.lg,
    borderRadius: 12,
    ...SHADOWS.sm,
  },
  messageText: {
    textAlign: 'center',
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
  },
});
