import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/styles/colors';
import {SPACING} from '../../../../shared/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },
  label: {
    marginRight: SPACING.sm,
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: '500',
  },
  button: {
    marginHorizontal: SPACING.xs,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: COLORS.primary,
  },
});
