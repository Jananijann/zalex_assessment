import {StyleSheet} from 'react-native';
import {SPACING} from '../../styles/spacing';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xxxl,
  },
  card: {
    width: '100%',
    borderRadius: 16,
    padding: SPACING.xxl,
    alignItems: 'center',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: SPACING.xxl,
  },
  button: {
    width: '100%',
    paddingVertical: SPACING.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
