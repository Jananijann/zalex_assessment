import React, {useState} from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import {Text, Menu, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SortField} from '@features/certificate/utils/common';
import {STRINGS} from '../../../../shared/constants/strings';
import {useColors} from '../../../../shared/theme';
import {styles} from './styles';
import {FilterBarProps} from './types';

const STATUSES = [
  STRINGS.statusNew,
  STRINGS.statusPending,
  STRINGS.statusUnderReview,
  STRINGS.statusDone,
];

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
  const [statusMenuVisible, setStatusMenuVisible] = useState(false);

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

      <View style={styles.statusSortRow}>
        <View style={styles.statusWrapper}>
          <Text style={[styles.inputLabel, {color: colors.textSecondary}]}>
            {STRINGS.filterStatus}
          </Text>
          <Menu
            visible={statusMenuVisible}
            onDismiss={() => setStatusMenuVisible(false)}
            anchor={
              <Button
                mode="outlined"
                onPress={() => setStatusMenuVisible(true)}
                style={[styles.dropdownButton, {borderColor: colors.border}]}
                labelStyle={[styles.dropdownLabel, {color: colors.textPrimary}]}
                contentStyle={styles.dropdownContent}
                icon={() => <Icon name="chevron-down" size={16} color={colors.textSecondary} />}
              >
                {status || STRINGS.filterAllStatuses}
              </Button>
            }
          >
            <Menu.Item
              onPress={() => {
                setStatus('');
                setStatusMenuVisible(false);
                onApplyFilters({address_to: addressTo || undefined});
              }}
              title={STRINGS.filterAllStatuses}
            />
            {STATUSES.map(s => (
              <Menu.Item
                key={s}
                onPress={() => {
                  setStatus(s);
                  setStatusMenuVisible(false);
                  onApplyFilters({address_to: addressTo || undefined, status: s});
                }}
                title={s}
              />
            ))}
          </Menu>
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
