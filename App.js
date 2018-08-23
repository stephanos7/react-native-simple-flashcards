import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
        <TabNav />
    );
  }
}

class HomeView extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start </Text>
      </View>
    )
  }
}

class Other extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start </Text>
      </View>
    )
  }
}


const TabNav = createBottomTabNavigator({
  Home: {
    screen: HomeView
    },
  Other: {
    screen: Other
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
