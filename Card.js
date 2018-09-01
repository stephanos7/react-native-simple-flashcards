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
  render(){
    const {questions} = this.props;
    const {answerShown} = this.state;
    return(
      <View style={styles.card}>

        <Text style={{color:"blue"}}>{answerShown === false ? questions.question : questions.answer}</Text>
        <Button title={ answerShown === false ? "view answer": "view question"} onPress={this.toggleQA} />
      </View>
    )
  }
}