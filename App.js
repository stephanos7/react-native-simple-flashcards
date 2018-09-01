import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import styles from "./styles";

import List from "./List";
import CardView from "./CardView";
import NewDeckView from "./NewDeckView";
import SecondStepView from "./SecondStepView";

export default class App extends React.Component {
  state = {
    title: null,
    questionInput: null,
    answerInput: null,
    entry: {
    questions:[]
    }
  }

  composeEntry = (question, answer) => {
    const set = { 
      question:question,
      answer:answer 
    }
    this.setState( prevState => ({questions : prevState.entry.questions.push(set)}))
  }

  submit = async () => {
    const title = this.state.title
    const {questionInput, answerInput} = this.state;
    await this.composeEntry(questionInput, answerInput);
    const entry = this.state.entry
    console.log("the key is : ", title)
    operation(title, entry);
  }

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
        <List {...this.props}/>
      </View>
    )
  }
}

const NewDeckNavigation = createStackNavigator({
  firstStep: {
  screen: (props) => (<NewDeckView 
                        {...props} 
                        instructions={"add deck title"} />),
    navigationOptions: () => ({
      headerTitle: "Add Title"
      })
  },
  secondStep: {
    screen: (props) => (<NewDeckView
                    {...props}
                    instructions={"add question & answer"} />),
    navigationOptions: () => ({
      headerTitle: "Add Questions"
      })
  }
})

const SpecificDeckNavigation = createStackNavigator({
  HomeView: {
  screen: (props) => (<HomeView {...props} />)
},
  CardView: {
  screen: (props) => (<CardView {...props} />),
    navigationOptions: (props) => ({
      headerTitle: "cards in deck"
      })
  }
});

const TabNav = createBottomTabNavigator({
  Decks: {
    screen: SpecificDeckNavigation,
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



