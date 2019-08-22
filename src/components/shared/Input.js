import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';

import Block from './Block';
import {theme} from '../../config';

export default class Input extends Component {
  render() {
    const {email, phone, number, secure, error, style, ...props} = this.props;

    const inputStyles = [
      styles.input,
      error && {borderColor: theme.colors.accent},
      style,
    ];

    const inputType = email
      ? 'email-address'
      : number
      ? 'numeric'
      : phone
      ? 'phone-pad'
      : 'default';

    return (
      <Block flex={false}>
        <TextInput
          style={inputStyles}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          {...props}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.primary,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Raleway-Medium',
    color: theme.colors.primary,
    height: theme.sizes.base * 3,
  },
});
