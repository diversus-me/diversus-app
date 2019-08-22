import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import {Button, Block, Input, Text} from '../components/shared';
import {NavigationServices} from '../navigation';
import {theme} from '../config';

import styles from './styles/login.styles';

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
          <SafeAreaView style={styles.loginContent}>
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

                <Button
                  style={styles.button}
                  color={theme.colors.primary}
                  onPress={() => NavigationServices.navigate('Home')}>
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
