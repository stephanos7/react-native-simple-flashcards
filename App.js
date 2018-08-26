import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import styles from "./styles";

import List from "./List";
import NewDeckView from "./NewDeckView";
import SecondStepView from "./SecondStepView";

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

const NewDeckNavigation = createStackNavigator({
  firstStep: {
  screen: (props) => (<NewDeckView 
                        {...props} 
                        step={"first"} 
                        instructions={"add deck title"} />),
    navigationOptions: () => ({
      headerTitle: "Add Title"
      })
  },
  secondStep: {
    screen: (props) => (<NewDeckView
                    {...props}
                    step={"second"}
                    instructions={"add question & answer"} />)
      ,
    navigationOptions: () => ({
      headerTitle: "Add Questions"
      })
  }
})

const TabNav = createBottomTabNavigator({
  Decks: {
    screen: HomeView,
    navigationOptions: () => ({
      headerTitle: "My Decks"
      })
    },
  New: {
    screen: NewDeckNavigation,
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



