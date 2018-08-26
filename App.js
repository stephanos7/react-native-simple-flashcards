import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
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
        <View style={styles.form}>
          <Text style={styles.question}>What's the deck's title?</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"New Deck Titlee"}
            placeholderTextColor={"lightgrey"}
            />
            <Button style={styles.button} title={"Submit"}/>
        </View>
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

