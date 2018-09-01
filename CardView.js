import React from "react";
import { View, Text, Alert } from "react-native";

import styles from "./styles";
import Card from "./Card";

export default class CardView extends React.Component {
  state = {
    currentQ: 1
  }

  navigateCards = async (totalQuestions) => {
    this.state.currentQ === totalQuestions
    ?
    Alert.alert(
      'Well done!',
      'You have completed the deck!',
      [    
        {text: 'OK', onPress: () => this.props.navigation.goBack()},
      ],
      { cancelable: false }
    )
    :
    await this.setState( 
      prevState => ({currentQ: prevState.currentQ+1}), 
        () => alert(JSON.stringify(this.state.currentQ))
  )
  this.props.navigation.push("CardView", questions)
  }



  render(){
    const questions =  this.props.navigation.getParam('questions');
    const totalQs = questions.length;
    const {currentQ} = this.state;

    return(
      <View>
      <Text>STATE:</Text>
      <Text>{JSON.stringify(this.state)}</Text>
      <Text>{currentQ}/{totalQs}</Text>
      <Card {...this.props} 
            {...questions[currentQ-1]}
            totalQs={totalQs}
            navigateCards={this.navigateCards}  />
      </View>
    )
  }
}
