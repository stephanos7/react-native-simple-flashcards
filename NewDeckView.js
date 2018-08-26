import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

import styles from "./styles";
import { operation } from "./utils/api";

export default class NewDeckView extends React.Component {
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
    // alert(JSON.stringify(this.state.entry));
  }

  submit = async () => {
    const title = this.state.title
    const {questionInput, answerInput} = this.state;
    await this.composeEntry(questionInput, answerInput);
    const entry = this.state.entry
    console.log("the key is : ", title)
    operation(title, entry);
  }

  finish = () => {
    Alert.alert(
      'Well done!',
      'Great your work has been saved!',
      [    
        {text: 'OK', onPress: () => this.props.navigation.navigate("Decks")},
      ],
      { cancelable: false }
    )
  }
  componentWillMount() {
    if(this.props.navigation.state.routeName === "secondStep"){
      const title = this.props.navigation.state.params.title
      this.setState({title})
    }
  }

  render(){
    const {instructions, step} = this.props
    return(
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.question}>{instructions}</Text>
            { this.props.navigation.state.routeName === "secondStep" 
            ?
            <View>
              <TextInput
              style={styles.textInput}
              placeholder={"add question"}
              placeholderTextColor={"white"}
              onChangeText={ (text) => this.setState({questionInput:text}) }
              value={this.state.questionInput}
              /> 
              <TextInput
              style={styles.textInput}
              placeholder={"add answer"}
              placeholderTextColor={"white"}
              onChangeText={ (text) => this.setState({answerInput:text}) }
              value={this.state.answerInput}
              />
              <Text>{JSON.stringify(this.state)}</Text>
            </View>
            :
            <View>
              <TextInput
              style={styles.textInput}
              placeholder={"New Deck Title"}
              placeholderTextColor={"white"}
              onChangeText={ (text) => this.setState({title:text}) }
              value={this.state.title}
              />
            </View>}
            <Button 
              title={"Submit"}
              onPress={ this.props.navigation.state.routeName === "firstStep" ?  () => this.props.navigation.navigate("secondStep", {title:this.state.title}) : this.submit }
            />
            { this.state.entry.questions.length > 0
            && 
            <Button 
              title={"Finish"}
              onPress={this.finish}
            />
            }
        </View>
      </View>
    )
  }
}

