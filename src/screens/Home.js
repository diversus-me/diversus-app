import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {Image, TouchableOpacity} from 'react-native';

import {Block, Text, Card} from '../components/shared';
import {theme} from '../config';

import styles from './styles/home.styles';
import SearchInput from '../components/search-input/search-input';

//Assets
const MENU_ICON = require('../../assets/images/menu.png');
const USER_ICON = require('../../assets/images/user.png');

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

          <Block flex={false}>
            <Card flex={false} shadow>
              <Block flex={false} row>
                <Block flex={0.4} alignSelf="center">
                  <Text primary>Image</Text>
                </Block>
                <Block flex={0.6}>
                  <Text size={14} primary bold numuberOfLines={3}>
                    Title of the flower and and this ist the second and and
                    third line…
                  </Text>
                  <Text
                    size={12}
                    align="right"
                    secondary
                    style={{marginTop: 20, marginBottom: 10}}>
                    133 Petals
                  </Text>
                  <Block flex={false} row space="between">
                    <Block flex={false} row>
                      <Image
                        source={USER_ICON}
                        // style={{width: 40, height: 40}}
                      />
                    </Block>
                    <Text primary style={{opacity: 0.5}}>
                      Jul 13, 2019
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Card>
          </Block>
        </Block>
      </SafeAreaView>
    );
  }
}

export default Home;
