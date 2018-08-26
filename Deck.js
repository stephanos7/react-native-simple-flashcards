import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default class Deck extends React.Component {
  render(){
    const {deckName} = this.props;

    return(
      <View style={styles.deck}>
        <Text>{deckName}</Text>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}