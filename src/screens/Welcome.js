import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

import {Button, Block, Input, Text} from '../components';
import {theme} from '../config';

const BACKGROUND_IMAGE = require('../../assets/images/welcome-bg.png');
const APP_LOGO = require('../../assets/images/diversus-logo.png');

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    errors: [],
    loading: false,
  };

  handleLogin() {
    const {email} = this.state;
    const errors = [];
    Keyboard.dismiss();
    return;
  }

  render() {
    const {errors} = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <ImageBackground style={styles.login} source={BACKGROUND_IMAGE}>
          <SafeAreaView style={{flex: 1}}>
            <Block center>
              <Block
                flex={false}
                middle
                center
                color={theme.colors.white}
                style={[styles.logo, {marginVertical: 150}]}>
                <Image
                  style={styles.logoImage}
                  resizeMode="cover"
                  source={APP_LOGO}
                />
              </Block>

              <Block center>
                <Input
                  error={hasErrors('email')}
                  style={[styles.input, hasErrors('email')]}
                  defaultValue={this.state.email}
                  onChangeText={text => this.setState({email: text})}
                  placeholder="Enter email"
                  placeholderTextColor={theme.colors.primary}
                />

                <Button style={styles.button} color={theme.colors.primary}>
                  <Text regular white center size={theme.sizes.base}>
                    Login
                  </Text>
                </Button>
              </Block>
            </Block>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
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
