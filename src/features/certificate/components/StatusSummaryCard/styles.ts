import {StyleSheet} from 'react-native';
import {SPACING} from '../../../../shared/styles';
import {SHADOWS} from '../../../../shared/styles/shadows';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.sm,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  card: {
    flex: 1,
    marginHorizontal: SPACING.xs,
    borderRadius: 12,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
    ...SHADOWS.sm,
  },
  cardActive: {
    ...SHADOWS.lg,
  },
  count: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 2,
    letterSpacing: -0.5,
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
