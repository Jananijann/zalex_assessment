import React from 'react';
import {View, Modal, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useColors} from '../../theme';
import {styles} from './styles';

interface SuccessModalProps {
  visible: boolean;
  title: string;
  message: string;
  buttonText: string;
  onPress: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  title,
  message,
  buttonText,
  onPress,
}) => {
  const colors = useColors();

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent>
      <View style={[styles.overlay, {backgroundColor: colors.overlay}]}>
        <View style={[styles.card, {backgroundColor: colors.surface}]}>
          <View style={[styles.iconCircle, {backgroundColor: colors.successLight}]}>
            <Icon name="check-circle" size={48} color={colors.success} />
          </View>
          <Text style={[styles.title, {color: colors.textPrimary}]}>{title}</Text>
          <Text style={[styles.message, {color: colors.textSecondary}]}>{message}</Text>
          <Pressable
            onPress={onPress}
            style={[styles.button, {backgroundColor: colors.primary}]}
            accessibilityRole="button"
            accessibilityLabel={buttonText}
          >
            <Text style={[styles.buttonText, {color: colors.white}]}>{buttonText}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
