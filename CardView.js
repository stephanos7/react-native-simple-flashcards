import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import Card from "./Card";

export default class CardView extends React.Component {
  state = {
    questions: [],
    totalQs : 0,
    currentQ: 1
  }
  componentDidMount(){
    const questions = this.props.navigation.getParam('questions');
    this.setState({questions});
    this.setState({totalQs: questions.length});
    this.setState({currentQ: 1});
  }

  navigateCards = async (props) => {
    const {questions} = this.state;
    await this.setState( prevState => ({currentQ: prevState.currentQ+1}),
() => alert(JSON.stringify(this.state.currentQ))
  )
  props.navigation.push("CardView", questions)
  }

  render(){
    const {questions, currentQ, totalQs} = this.state;

    return(
      <View>
      <Text>{currentQ}/{totalQs}</Text>
      <Card {...this.props} 
            {...questions[currentQ-1]}
            navigateCards={this.navigateCards}  />

      </View>
    )
  }
}

// {
//   questions.map( (q, index) => <Card key={index} questions={questions[index]} />)
// }