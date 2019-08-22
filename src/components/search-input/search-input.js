import React from 'react';
import {Image, TextInput} from 'react-native';
// import Icon from 'react-native-vector-icons';

import {Block, Input} from '../shared';
import {theme} from '../../config';

import styles from './search-input.styles';

const SearchInput = ({...props}) => {
  return (
    <Block style={styles.search}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={theme.colors.primary}
        style={styles.searchInput}
        {...props}
      />

      <Image
        source={require('../../../assets/images/search-icon.png')}
        style={styles.searchIcon}
      />
    </Block>
  );
};

export default SearchInput;
