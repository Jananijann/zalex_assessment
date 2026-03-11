import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/styles/colors';
import {SPACING} from '../../../../shared/styles';
import {SHADOWS} from '../../../../shared/styles/shadows';

export const styles = StyleSheet.create({
  container: {
    padding: SPACING.lg,
    backgroundColor: COLORS.surface,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
    borderRadius: 12,
    ...SHADOWS.sm,
  },
  input: {
    marginBottom: SPACING.sm,
    backgroundColor: COLORS.surface,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.sm,
  },
  button: {
    flex: 1,
    marginHorizontal: SPACING.xs,
    borderRadius: 10,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
  },
});
