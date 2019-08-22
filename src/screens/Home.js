import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {Image, TouchableOpacity} from 'react-native';

import {Block, Text} from '../components/shared';
import {theme} from '../config';

import styles from './styles/home.styles';
import SearchInput from '../components/search-input/search-input';

//Assets
const MENU_ICON = require('../../assets/images/menu.png');

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      active: 'All',
    };
  }

  handleTab = tab => {
    this.setState({active: tab});
  };

  renderTab(tab) {
    const {active} = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}>
        <Text
          size={16}
          gray={!isActive}
          primary={isActive}
          bold={isActive}
          style={{textAlign: 'center'}}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {searchText} = this.state;
    const tabs = ['All', 'My Flowers', 'Popular'];
    return (
      <SafeAreaView style={styles.container}>
        <Block padding={[theme.sizes.base, theme.sizes.base]}>
          <Block flex={false}>
            <Image
              source={MENU_ICON}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </Block>

          <Block flex={false} padding={[theme.sizes.base, 0]}>
            <SearchInput
              onChangeText={text => this.setState({searchText: text})}
              value={searchText}
            />
          </Block>

          <Block flex={false} space="between" row style={styles.tabs}>
            {tabs.map(tab => this.renderTab(tab))}
          </Block>
        </Block>
      </SafeAreaView>
    );
  }
}

export default Home;
