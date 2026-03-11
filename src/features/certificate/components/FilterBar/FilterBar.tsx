import React, {useState} from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SortField} from '@features/certificate/utils/common';
import {STRINGS} from '../../../../shared/constants/strings';
import {useColors} from '../../../../shared/theme';
import {styles} from './styles';
import {FilterBarProps} from './types';

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  onApplyFilters,
  onClearFilters,
  sortField,
  sortOrder,
  onSort,
}) => {
  const colors = useColors();
  const [addressTo, setAddressTo] = useState('');
  const [status, setStatus] = useState('');

  const handleClear = () => {
    setAddressTo('');
    setStatus('');
    onSearchChange('');
    onClearFilters();
  };

  const handleSortToggle = (field: SortField) => {
    if (sortField === field) {
      onSort(field, sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      onSort(field, 'asc');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.surface}]}>
      <View style={styles.titleRow}>
        <Icon name="filter-variant" size={20} color={colors.textPrimary} />
        <Text style={[styles.title, {color: colors.textPrimary}]}>Filters & Sorting</Text>
      </View>

      <View style={styles.inputsRow}>
        <View style={styles.inputWrapper}>
          <Text style={[styles.inputLabel, {color: colors.textSecondary}]}>
            {STRINGS.filterReferenceNo}
          </Text>
          <View
            style={[
              styles.inputContainer,
              {borderColor: colors.border, backgroundColor: colors.surface},
            ]}
          >
            <RNTextInput
              value={searchQuery}
              onChangeText={onSearchChange}
              placeholder="Exact match..."
              placeholderTextColor={colors.textTertiary}
              style={[styles.textInput, {color: colors.textPrimary}]}
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={[styles.inputLabel, {color: colors.textSecondary}]}>
            {STRINGS.filterAddressTo}
          </Text>
          <View
            style={[
              styles.inputContainer,
              {borderColor: colors.border, backgroundColor: colors.surface},
            ]}
          >
            <RNTextInput
              value={addressTo}
              onChangeText={text => {
                setAddressTo(text);
                onApplyFilters({address_to: text || undefined, status: status || undefined});
              }}
              placeholder="Contains..."
              placeholderTextColor={colors.textTertiary}
              style={[styles.textInput, {color: colors.textPrimary}]}
            />
          </View>
        </View>
      </View>

      <View style={styles.sortSection}>
        <Text style={[styles.sortLabel, {color: colors.textSecondary}]}>{STRINGS.sortByLabel}</Text>
        <View style={styles.sortChips}>
          <Button
            mode={sortField === 'issued_on' ? 'contained' : 'outlined'}
            onPress={() => handleSortToggle('issued_on')}
            compact
            style={[
              styles.sortChip,
              {borderColor: colors.border},
              sortField === 'issued_on' && {
                backgroundColor: colors.primary,
                borderColor: colors.primary,
              },
            ]}
            labelStyle={[
              styles.sortChipLabel,
              {color: colors.textSecondary},
              sortField === 'issued_on' && {color: colors.white},
            ]}
          >
            {STRINGS.sortIssuedOn}
          </Button>
          <Button
            mode={sortField === 'status' ? 'contained' : 'outlined'}
            onPress={() => handleSortToggle('status')}
            compact
            style={[
              styles.sortChip,
              {borderColor: colors.border},
              sortField === 'status' && {
                backgroundColor: colors.primary,
                borderColor: colors.primary,
              },
            ]}
            labelStyle={[
              styles.sortChipLabel,
              {color: colors.textSecondary},
              sortField === 'status' && {color: colors.white},
            ]}
          >
            {STRINGS.sortStatus}
          </Button>
        </View>
      </View>

      {(searchQuery || addressTo || status) && (
        <Button
          mode="text"
          onPress={handleClear}
          compact
          textColor={colors.textSecondary}
          style={styles.clearButton}
        >
          Clear All
        </Button>
      )}
    </View>
  );
};

export default FilterBar;
