import {StyleSheet} from 'react-native';

import {theme} from '../../config';

const styles = StyleSheet.create({
  searchInput: {
    fontSize: theme.sizes.font,
    color: theme.colors.primary,
    height: theme.sizes.base * 2.333,
    backgroundColor: theme.colors.gray2,
    borderColor: theme.colors.gray2,
    borderRadius: theme.sizes.radius,
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5,
  },
  searchIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 8,
    top: 6,
  },
});

export default styles;
