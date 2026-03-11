import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {STRINGS} from '../../../../shared/constants/strings';
import {styles} from './styles';

interface CharacterCounterProps {
  current: number;
  minimum: number;
}

const CharacterCounter: React.FC<CharacterCounterProps> = ({current, minimum}) => {
  const isValid = current >= minimum;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, isValid ? styles.valid : styles.invalid]}>
        {STRINGS.charCounterFormat(current, minimum)}
      </Text>
    </View>
  );
};

export default CharacterCounter;
