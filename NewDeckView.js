import React from "react";
import { View, Text, TextInput, Button } from "react-native";

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

  submit = () => {
    const key = this.state.title;
    const entry = {name:"hello"}
    operation(key, entry);
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
            </View>}
            <Button 
              title={"Submit"}
              onPress={() => this.props.navigation.navigate("secondStep")}
            />
        </View>
      </View>
    )
  }
}

