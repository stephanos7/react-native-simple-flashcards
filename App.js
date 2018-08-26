import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import styles from "./styles";

import List from "./List";
import Deck from "./Deck";

export default class App extends React.Component {
  render() {
    return (
        <TabNav />
    )
  }
}

class HomeView extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <List />
      </View>
    )
  }
}

class NewDeck extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>New deck</Text>
      </View>
    )
  }
}


const TabNav = createBottomTabNavigator({
  Decks: {
    screen: HomeView,
    navigationOptions: () => ({
      headerTitle: "My Decks"
      })
    },
  New: {
    screen: NewDeck,
    navigationOptions: () => ({
      title: "Create New"
      })
    }
  },
  {
  tabBarOptions: {
    initialRouteName: "HomeView",
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    }
  }
})

