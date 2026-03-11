import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Menu} from 'react-native-paper';
import {FilterCriteria} from '../../../../types';
import {STRINGS} from '../../../../shared/constants/strings';
import {COLORS} from '../../../../shared/styles/colors';
import {styles} from './styles';

interface FilterBarProps {
  onApplyFilters: (criteria: FilterCriteria) => void;
  onClearFilters: () => void;
}

const STATUSES = [
  STRINGS.statusNew,
  STRINGS.statusPending,
  STRINGS.statusUnderReview,
  STRINGS.statusDone,
];

const FilterBar: React.FC<FilterBarProps> = ({onApplyFilters, onClearFilters}) => {
  const [addressTo, setAddressTo] = useState('');
  const [status, setStatus] = useState('');
  const [statusMenuVisible, setStatusMenuVisible] = useState(false);

  const handleApply = () => {
    onApplyFilters({
      address_to: addressTo || undefined,
      status: status || undefined,
    });
  };

  const handleClear = () => {
    setAddressTo('');
    setStatus('');
    onClearFilters();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={STRINGS.filterAddressTo}
        value={addressTo}
        onChangeText={setAddressTo}
        mode="outlined"
        style={styles.input}
        dense
        outlineColor={COLORS.border}
        activeOutlineColor={COLORS.primary}
      />
      <Menu
        visible={statusMenuVisible}
        onDismiss={() => setStatusMenuVisible(false)}
        anchor={
          <TextInput
            label={STRINGS.filterStatus}
            value={status}
            mode="outlined"
            style={styles.input}
            dense
            editable={false}
            outlineColor={COLORS.border}
            activeOutlineColor={COLORS.primary}
            right={<TextInput.Icon icon="menu-down" onPress={() => setStatusMenuVisible(true)} />}
            onPressIn={() => setStatusMenuVisible(true)}
          />
        }
      >
        <Menu.Item
          onPress={() => {
            setStatus('');
            setStatusMenuVisible(false);
          }}
          title={STRINGS.filterAllStatuses}
        />
        {STATUSES.map(s => (
          <Menu.Item
            key={s}
            onPress={() => {
              setStatus(s);
              setStatusMenuVisible(false);
            }}
            title={s}
          />
        ))}
      </Menu>
      <View style={styles.buttonRow}>
        <Button mode="contained" onPress={handleApply} style={[styles.button, styles.applyButton]}>
          {STRINGS.buttonApplyFilters}
        </Button>
        <Button mode="outlined" onPress={handleClear} style={styles.button}>
          {STRINGS.buttonClearFilters}
        </Button>
      </View>
    </View>
  );
};

export default FilterBar;
