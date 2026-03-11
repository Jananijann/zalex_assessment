import {StyleSheet} from 'react-native';
import {COLORS} from './colors';
import {SPACING} from './spacing';
import {SHADOWS} from './shadows';

export const BORDER_RADIUS = {
  sm: 6,
  md: 10,
  lg: 12,
  xl: 16,
};

export const GLOBAL_STYLES = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
  },
  card: {
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: COLORS.surface,
    ...SHADOWS.md,
  },
  inputOutlined: {
    backgroundColor: COLORS.surface,
  },
  sectionPadding: {
    padding: SPACING.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  primaryButton: {
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.primary,
  },
  outlinedButton: {
    borderRadius: BORDER_RADIUS.md,
    borderColor: COLORS.primary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.borderLight,
    marginVertical: SPACING.md,
  },
});
