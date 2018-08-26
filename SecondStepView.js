import React from "react";
import {View, Text, TextInput, Button } from "react-native";

import styles from "./styles";

export default class secondStepView extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.form}>
        <Text style={styles.question}>What's the deck's title?</Text>
          <Text>Question:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Add a question"}
            placeholderTextColor={"white"}
            />
          <Text>Answer:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Add an answer"}
            placeholderTextColor={"white"}
            />
            <Button 
              title={"Submit"}
              onPress={() => this.props.navigation.navigate("secondStep")}
            />
        </View>
      </View>
    )
  }
}