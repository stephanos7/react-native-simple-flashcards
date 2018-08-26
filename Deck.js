import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default class Deck extends React.Component {
  render(){
    return(
      <View style={styles.deck}>
        <Text>Deck</Text>
      </View>
    )
  }
}