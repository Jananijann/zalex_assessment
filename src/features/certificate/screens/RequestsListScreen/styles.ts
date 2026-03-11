import {StyleSheet} from 'react-native';
import {SPACING} from '../../../../shared/styles';
import {SHADOWS} from '../../../../shared/styles/shadows';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: SPACING.sm,
  },
  listContent: {
    paddingBottom: 88,
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    right: SPACING.xl,
    bottom: SPACING.xl,
    borderRadius: 16,
    ...SHADOWS.lg,
  },
  emptyFiltered: {
    paddingVertical: SPACING.xxxl,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 15,
    textAlign: 'center',
  },
});
