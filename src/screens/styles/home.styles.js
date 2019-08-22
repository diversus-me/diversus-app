import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../config';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white2,
  },
  active: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3,
  },
  tabs: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base * 2.5,
  },
  tab: {
    width: (width - 36) / 3,
    paddingBottom: theme.sizes.font,
  },
});

export default styles;
