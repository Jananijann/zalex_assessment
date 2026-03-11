import {Platform} from 'react-native';
import {COLORS} from './colors';

const FONT_FAMILY = Platform.select({
  ios: 'Inter',
  android: 'Inter',
  default: 'Inter',
});

export const FONTS = {
  regular: `${FONT_FAMILY}-Regular`,
  medium: `${FONT_FAMILY}-Medium`,
  semiBold: `${FONT_FAMILY}-SemiBold`,
  bold: `${FONT_FAMILY}-Bold`,
};

export const FONT_SIZES = {
  xs: 11,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  xxxl: 24,
};

export const LINE_HEIGHTS = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  xxl: 30,
};

export const TYPOGRAPHY = {
  screenTitle: {
    fontSize: FONT_SIZES.xxl,
    fontFamily: FONTS.bold,
    fontWeight: '700' as const,
    color: COLORS.textPrimary,
    letterSpacing: -0.3,
    lineHeight: LINE_HEIGHTS.xxl,
  },
  cardTitle: {
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.semiBold,
    fontWeight: '600' as const,
    color: COLORS.textPrimary,
    letterSpacing: -0.2,
    lineHeight: LINE_HEIGHTS.lg,
  },
  heading: {
    fontSize: FONT_SIZES.xxl,
    fontFamily: FONTS.bold,
    fontWeight: '700' as const,
    color: COLORS.textPrimary,
    letterSpacing: -0.3,
    lineHeight: LINE_HEIGHTS.xxl,
  },
  subheading: {
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.semiBold,
    fontWeight: '600' as const,
    color: COLORS.textPrimary,
    lineHeight: LINE_HEIGHTS.lg,
  },
  body: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
    fontWeight: '400' as const,
    color: COLORS.textPrimary,
    lineHeight: LINE_HEIGHTS.md,
  },
  bodyText: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
    fontWeight: '400' as const,
    color: COLORS.textPrimary,
    lineHeight: LINE_HEIGHTS.md,
  },
  bodySmall: {
    fontSize: FONT_SIZES.sm,
    fontFamily: FONTS.regular,
    fontWeight: '400' as const,
    color: COLORS.textSecondary,
    lineHeight: LINE_HEIGHTS.sm,
  },
  label: {
    fontSize: FONT_SIZES.sm,
    fontFamily: FONTS.medium,
    fontWeight: '500' as const,
    color: COLORS.textSecondary,
    textTransform: 'uppercase' as const,
    letterSpacing: 0.5,
    lineHeight: LINE_HEIGHTS.sm,
  },
  caption: {
    fontSize: FONT_SIZES.xs,
    fontFamily: FONTS.regular,
    fontWeight: '400' as const,
    color: COLORS.textSecondary,
    lineHeight: LINE_HEIGHTS.xs,
  },
};
