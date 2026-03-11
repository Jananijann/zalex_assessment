import {StyleSheet} from 'react-native';
import {SPACING} from '../../../../shared/styles';

export const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: SPACING.xs,
    height: 28,
  },
  chipText: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
