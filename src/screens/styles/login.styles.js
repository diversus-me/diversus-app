import {StyleSheet} from 'react-native';
import {theme} from '../../config';

const styles = StyleSheet.create({
  login: {
    flex: 1,
  },
  loginContent: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  logo: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderRadius: 55,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.11,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  logoImage: {height: 48, width: 32},
  button: {
    marginTop: 10,
    width: 200,
    height: 40,
    borderRadius: 10,
  },
  input: {
    width: 278,
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});

export default styles;
