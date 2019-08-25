import React from 'react';
import {Image} from 'react-native';

import {Block, Text} from '../shared';
import {theme} from '../../config';

//Assets
const MENU_ICON = require('../../../assets/images/menu.png');

const Header = () => {
  return (
    <Block
      flex={false}
      space="between"
      row
      center
      padding={[theme.sizes.base, theme.sizes.base * 1.5]}>
      <Image
        source={MENU_ICON}
        resizeMode="contain"
        style={{width: 20, height: 20}}
      />

      <Text semibold h1 style={{color: '#707070'}}>
        diversus
      </Text>

      <Image
        source={require('../../../assets/images/search-icon.png')}
        style={{width: 24, height: 24}}
      />
    </Block>
  );
};

export default Header;
