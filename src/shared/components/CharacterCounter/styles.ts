import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {SPACING} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: SPACING.xs,
    marginTop: SPACING.xs,
  },
  text: {
    fontSize: 11,
  },
  valid: {
    color: COLORS.textSecondary,
  },
  invalid: {
    color: COLORS.danger,
  },
});
