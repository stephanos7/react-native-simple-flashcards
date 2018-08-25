import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default class Deck extends React.Component {
  render(){
    return(
      <View>
        <Text style={styles.deck}>Deck</Text>
      </View>
    )
  }
}