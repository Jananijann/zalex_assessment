import React from 'react';
import {Searchbar as PaperSearchbar} from 'react-native-paper';
import {STRINGS} from '../../../../shared/constants/strings';
import {useColors} from '../../../../shared/theme';
import {styles} from './styles';
import {SearchBarProps} from './types';

const SearchBar: React.FC<SearchBarProps> = ({value, onChangeText}) => {
  const colors = useColors();

  return (
    <PaperSearchbar
      placeholder={STRINGS.searchPlaceholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.searchbar, {backgroundColor: colors.surface}]}
      iconColor={colors.textSecondary}
      inputStyle={{color: colors.textPrimary}}
    />
  );
};

export default SearchBar;
