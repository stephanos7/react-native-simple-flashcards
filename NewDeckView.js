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
    const key = this.state.title
    const {questionInput, answerInput} = this.state;
    await this.composeEntry(questionInput, answerInput);
    const entry = this.state.entry
    operation(key, entry);
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

  render(){
    const {instructions, step} = this.props
    return(
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.question}>{instructions}</Text>
            { step === "second" 
            ?
            <View>
              <TextInput
              style={styles.textInput}
              placeholder={"add question"}
              placeholderTextColor={"white"}
              onChangeText={ (text) => this.setState({questionInput:text}) }
              value={this.state.title}
              /> 
              <TextInput
              style={styles.textInput}
              placeholder={"add answer"}
              placeholderTextColor={"white"}
              onChangeText={ (text) => this.setState({answerInput:text}) }
              value={this.state.title}
              />
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
              <Text>{JSON.stringify(this.state.title)}</Text>
            </View>}
            <Button 
              title={"Submit"}
              onPress={ step === "first" ?  () => this.props.navigation.navigate("secondStep") : this.submit }
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

