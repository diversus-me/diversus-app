import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';

import ActionButton from '../components/action-button/action-button';
import Icon from 'react-native-vector-icons/Feather';

import {Block, Text, Card} from '../components/shared';
import {theme, mocks} from '../config';

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

  renderCard(item) {
    return (
      <Card flex={false} shadow>
        <Block flex={false} row>
          <Block flex={0.4} middle>
            <Block
              style={{
                width: 52,
                height: 52,
                marginLeft: 26,
              }}
              flex={false}>
              <Image
                source={item.connects[0].image}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 52 / 2,
                  borderWidth: 1,
                  resizeMode: 'cover',
                  borderColor: theme.colors.primary,
                }}
              />

              {item.connects.map((connect, index) => {
                let viewStyle = {position: 'absolute'};

                switch (index) {
                  case 1: {
                    viewStyle.left = 15;
                    viewStyle.top = -32;
                    break;
                  }
                  case 2: {
                    viewStyle.right = -14;
                    viewStyle.top = -25;
                    break;
                  }
                  case 3: {
                    viewStyle.right = -28;
                    viewStyle.top = 1;
                    break;
                  }
                  case 4: {
                    viewStyle.left = -14;
                    viewStyle.top = -25;
                    break;
                  }
                  case 5: {
                    viewStyle.left = -28;
                    viewStyle.top = 1;
                    break;
                  }
                  case 6: {
                    viewStyle.left = 15;
                    viewStyle.top = -32;
                    break;
                  }
                  case 7: {
                    viewStyle.left = -14;
                    viewStyle.bottom = -25;
                    break;
                  }
                  case 8: {
                    viewStyle.left = -28;
                    viewStyle.bottom = 1;
                    break;
                  }
                  case 9: {
                    viewStyle.right = -14;
                    viewStyle.bottom = -25;
                    break;
                  }
                  case 10: {
                    viewStyle.right = -28;
                    viewStyle.bottom = 1;
                    break;
                  }
                  default: {
                    viewStyle.left = 15;
                    viewStyle.bottom = -32;
                  }
                }

                let imageStyle = {
                  borderColor: theme.colors.green,
                };

                switch (connect.color) {
                  case 'red': {
                    imageStyle.borderColor = theme.colors.accent;
                    break;
                  }
                  case 'green': {
                    imageStyle.borderColor = theme.colors.green;
                    break;
                  }
                  case 'blue': {
                    imageStyle.borderColor = theme.colors.secondary;
                    break;
                  }
                  case 'gray': {
                    imageStyle.borderColor = theme.colors.gray;
                    break;
                  }
                  default: {
                    imageStyle.borderColor = theme.colors.green;
                  }
                }

                return (
                  <Block key={`${index}`} flex={false} style={viewStyle}>
                    <Image
                      source={connect.image}
                      style={[styles.connectImageStyle, imageStyle]}
                    />
                  </Block>
                );
              })}
            </Block>
          </Block>

          <Block flex={0.6}>
            <Text size={14} primary bold numuberOfLines={3}>
              {item.title}
            </Text>
            <Text
              size={12}
              align="right"
              secondary
              style={{marginTop: 20, marginBottom: 10}}>
              {item.petals}
            </Text>
            <Block flex={false} row center space="between">
              <Block flex={false} row center>
                <Image
                  source={item.userImage}
                  style={{width: 28, height: 28, borderRadius: 28 / 2}}
                />

                <Text primary style={{paddingLeft: 5}}>
                  {item.userName}
                </Text>
              </Block>
              <Text
                primary
                style={{
                  opacity: 0.5,
                  fontFamily: 'system font',
                }}>
                {item.date}
              </Text>
            </Block>
          </Block>
        </Block>
      </Card>
    );
  }

  renderUserCards() {
    return (
      <Block>
        <FlatList
          contentContainerStyle={{
            paddingTop: theme.sizes.base,
            paddingBottom: 1,
          }}
          showsVerticalScrollIndicator={false}
          data={mocks.userData}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item}) => this.renderCard(item)}
        />
      </Block>
    );
  }

  render() {
    const {searchText, active} = this.state;
    const tabs = ['All', 'My Flowers', 'Popular'];
    return (
      <SafeAreaView style={styles.container}>
        <Block flex={1} padding={[0, theme.sizes.base]}>
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

          {active === 'All' ? (
            this.renderUserCards()
          ) : (
            <Block flex={1} center middle>
              <Text primary h1>
                Comming Soon...
              </Text>
            </Block>
          )}

          <ActionButton
            bgColor="red"
            position="right"
            buttonColor={theme.colors.primary}
          />
        </Block>
      </SafeAreaView>
    );
  }
}

export default Home;
