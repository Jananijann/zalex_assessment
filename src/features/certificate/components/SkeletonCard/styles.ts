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
    padding: SPACING.lg,
    ...SHADOWS.sm,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  titleBar: {
    width: 120,
    height: 16,
    borderRadius: 6,
    backgroundColor: COLORS.skeleton,
  },
  chipBar: {
    width: 64,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.skeleton,
  },
  lineBar: {
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.skeleton,
    marginBottom: SPACING.sm,
  },
  lineBarShort: {
    width: '60%',
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.skeleton,
  },
});
