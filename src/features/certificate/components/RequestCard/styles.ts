import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/styles/colors';
import {SPACING} from '../../../../shared/styles';
import {SHADOWS} from '../../../../shared/styles/shadows';

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.sm,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    ...SHADOWS.md,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  refNo: {
    fontWeight: '600',
    fontSize: 15,
    color: COLORS.primary,
    letterSpacing: -0.2,
  },
  addressTo: {
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
    lineHeight: 20,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  issuedOn: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  purpose: {
    color: COLORS.textSecondary,
    fontSize: 13,
    marginTop: SPACING.xs,
    lineHeight: 18,
  },
  chevronContainer: {
    position: 'absolute',
    right: 0,
    top: '50%',
  },
});
