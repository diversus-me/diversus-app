import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import Block from './Block';
import {theme} from '../../config';

export default class Card extends Component {
  render() {
    const {color, style, children, ...props} = this.props;
    const cardStyles = [styles.card];

    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        {children}
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    paddingVertical: 13,
    paddingHorizontal: 19,
  },
});
