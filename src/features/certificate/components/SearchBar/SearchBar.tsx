import React from 'react';
import {Searchbar as PaperSearchbar} from 'react-native-paper';
import {STRINGS} from '../../../../shared/constants/strings';
import {COLORS} from '../../../../shared/styles/colors';
import {styles} from './styles';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({value, onChangeText}) => {
  return (
    <PaperSearchbar
      placeholder={STRINGS.searchPlaceholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.searchbar}
      iconColor={COLORS.textSecondary}
      inputStyle={{color: COLORS.textPrimary}}
    />
  );
};

export default SearchBar;
