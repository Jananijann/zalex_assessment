import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/styles/colors';
import {SPACING} from '../../../../shared/styles';
import {SHADOWS} from '../../../../shared/styles/shadows';
import {STRINGS} from '../../../../shared/constants/strings';

export function getStatusBorderColor(status: string | undefined): string {
  switch (status) {
    case STRINGS.statusNew:
      return COLORS.statusNew;
    case STRINGS.statusPending:
      return COLORS.statusPending;
    case STRINGS.statusUnderReview:
      return COLORS.statusUnderReview;
    case STRINGS.statusDone:
      return COLORS.statusDone;
    default:
      return COLORS.border;
  }
}

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.sm,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    borderLeftWidth: 4,
    padding: SPACING.lg,
    ...SHADOWS.sm,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  refNo: {
    fontWeight: '700',
    fontSize: 15,
    color: COLORS.textPrimary,
    letterSpacing: -0.2,
  },
  purpose: {
    color: COLORS.textSecondary,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: SPACING.md,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  addressLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  addressTo: {
    fontSize: 13,
    color: COLORS.textSecondary,
    flex: 1,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: SPACING.sm,
  },
  issuedOn: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginLeft: 4,
  },
});
