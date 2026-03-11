import React, {useState} from 'react';
import {View, TextInput, Text, TextInputProps, Pressable} from 'react-native';
import {useColors} from '../../theme';
import {styles} from './styles';

interface ThemedTextInputProps extends Omit<TextInputProps, 'style'> {
  label: string;
  error?: string;
  onPress?: () => void;
}

const ThemedTextInput: React.FC<ThemedTextInputProps> = ({
  label,
  error,
  onPress,
  editable = true,
  ...inputProps
}) => {
  const colors = useColors();
  const [focused, setFocused] = useState(false);

  const borderColor = error ? colors.danger : focused ? colors.textPrimary : colors.border;
  const errorColor = error ? colors.danger : 'transparent';

  const inputContent = (
    <View
      style={[
        styles.inputContainer,
        {backgroundColor: colors.surface, borderColor},
        inputProps.multiline && styles.multilineContainer,
        inputProps.multiline && inputProps.numberOfLines
          ? {minHeight: Math.max(80, inputProps.numberOfLines * 24)}
          : undefined,
      ]}
    >
      <TextInput
        {...inputProps}
        editable={onPress ? false : editable}
        placeholderTextColor={colors.textTertiary}
        style={[
          styles.input,
          {color: colors.textPrimary},
          inputProps.multiline && styles.multilineInput,
        ]}
        onFocus={e => {
          setFocused(true);
          inputProps.onFocus?.(e);
        }}
        onBlur={e => {
          setFocused(false);
          inputProps.onBlur?.(e);
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.label, {color: colors.textSecondary}]}>{label}</Text>
      {onPress ? (
        <Pressable onPress={onPress} accessibilityRole="button">
          {inputContent}
        </Pressable>
      ) : (
        inputContent
      )}
      <Text style={[styles.errorText, {color: errorColor}]}>{error || ' '}</Text>
    </View>
  );
};

export default ThemedTextInput;
