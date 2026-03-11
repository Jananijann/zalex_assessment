import {COLORS} from './colors';

export const TYPOGRAPHY = {
  screenTitle: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: COLORS.textPrimary,
    letterSpacing: -0.3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: COLORS.textPrimary,
    letterSpacing: -0.2,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: COLORS.textPrimary,
    letterSpacing: -0.3,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: COLORS.textPrimary,
  },
  body: {
    fontSize: 14,
    fontWeight: '400' as const,
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  bodyText: {
    fontSize: 14,
    fontWeight: '400' as const,
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: '400' as const,
    color: COLORS.textSecondary,
    lineHeight: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '500' as const,
    color: COLORS.textSecondary,
    textTransform: 'uppercase' as const,
    letterSpacing: 0.5,
  },
  caption: {
    fontSize: 11,
    fontWeight: '400' as const,
    color: COLORS.textSecondary,
    lineHeight: 14,
  },
};
