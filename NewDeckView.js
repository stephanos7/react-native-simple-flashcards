import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import styles from "./styles";
import { submitEntry } from "./utils/api";

export default class NewDeckView extends React.Component {
  state = {
    input: "",
    title: null
  }

  submit = () => {

  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.question}>What's the deck's title?</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"New Deck Title"}
            placeholderTextColor={"white"}
            onChangeText={ (text) => this.setState({input:text}) }
            value={this.state.input}
            />
            <Text>{JSON.stringify(this.state)}</Text>
            <Button 
              title={"Submit"}
              onPress={this.submit}
            />
        </View>
      </View>
    )
  }
}

// this.props.navigation.navigate("secondStep")