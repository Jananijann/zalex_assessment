import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/styles/colors';
import {SPACING} from '../../../../shared/styles';
import {SHADOWS} from '../../../../shared/styles/shadows';

export const styles = StyleSheet.create({
  searchbar: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    ...SHADOWS.sm,
  },
});
