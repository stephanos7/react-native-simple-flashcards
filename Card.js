import React from "react";
import { View, Text, Button } from "react-native";

import styles from "./styles";

export default class Card extends React.Component {
  state = {
    answerShown : false
  }

  toggleQA = () => {
    this.setState( prevState => ({answerShown:!prevState.answerShown}))
  }
  checkResult = (selection) => {
    selection === this.props.answer 
    ? alert("u are right")
    : alert("u are wrong")
  }

  handleNavigation = () => {
    this.props.navigateCards(this.props.totalQs);
  }

  render(){
    const {question, answer} = this.props;
    const {answerShown} = this.state;
    return(
      <View style={styles.card}>
        <Text>{JSON.stringify(this.props)}</Text>
        <Text style={{color:"blue"}}>{answerShown === false ? question : answer}</Text>
        <Button title={ answerShown === false ? "view answer": "view question"} onPress={this.toggleQA} />
        {answerShown === false && 
        <View>
          <Button title="Correct" onPress={() => this.checkResult("Correct") } />
          <Button title="Incorrect" onPress={() => this.checkResult("Incorrect") } />
          <Button title="test nav" onPress={() => this.handleNavigation(this.props)} />
        </View>
          }
      </View>
    )
  }
}