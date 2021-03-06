import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../config';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  active: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3,
    marginBottom: -3,
  },
  tabs: {
    borderBottomColor: theme.colors.gray3,
    borderBottomWidth: 3,
    marginTop: theme.sizes.base,
  },
  tab: {
    width: (width - 36) / 3,
    paddingBottom: theme.sizes.font,
  },
  connectImageStyle: {
    width: 23,
    height: 23,
    borderRadius: 23 / 2,
    borderWidth: 1,
    resizeMode: 'cover',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default styles;
