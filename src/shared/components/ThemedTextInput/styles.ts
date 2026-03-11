import {StyleSheet} from 'react-native';
import {SPACING} from '../../styles/spacing';

export const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: SPACING.xs,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    minHeight: 48,
    justifyContent: 'center',
  },
  multilineContainer: {
    minHeight: 100,
    alignItems: 'flex-start',
  },
  input: {
    fontSize: 14,
    padding: 0,
    margin: 0,
  },
  multilineInput: {
    textAlignVertical: 'top',
    minHeight: 80,
  },
  errorText: {
    fontSize: 12,
    marginTop: SPACING.xs,
  },
});
