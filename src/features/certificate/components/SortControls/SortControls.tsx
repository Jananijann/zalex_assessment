import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {SortField} from '@features/certificate/utils/common';
import {STRINGS} from '../../../../shared/constants/strings';
import {styles} from './styles';
import {SortControlsProps} from './types';

const SortControls: React.FC<SortControlsProps> = ({currentField, currentOrder, onSort}) => {
  const handleToggle = (field: SortField) => {
    if (currentField === field) {
      onSort(field, currentOrder === 'asc' ? 'desc' : 'asc');
    } else {
      onSort(field, 'asc');
    }
  };

  const getIcon = (field: SortField) => {
    if (currentField !== field) {
      return 'sort';
    }
    return currentOrder === 'asc' ? 'sort-ascending' : 'sort-descending';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{STRINGS.sortByLabel}</Text>
      <Button
        mode={currentField === 'issued_on' ? 'contained' : 'outlined'}
        onPress={() => handleToggle('issued_on')}
        icon={getIcon('issued_on')}
        compact
        style={[styles.button, currentField === 'issued_on' && styles.activeButton]}
      >
        {STRINGS.sortIssuedOn}
      </Button>
      <Button
        mode={currentField === 'status' ? 'contained' : 'outlined'}
        onPress={() => handleToggle('status')}
        icon={getIcon('status')}
        compact
        style={[styles.button, currentField === 'status' && styles.activeButton]}
      >
        {STRINGS.sortStatus}
      </Button>
    </View>
  );
};

export default SortControls;
