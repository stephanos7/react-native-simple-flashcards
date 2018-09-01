import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default class Deck extends React.Component {
  render(){
    const {title} = this.props;

    return(
      <View style={styles.deck}>
        <Text>{JSON.stringify(this.props)}</Text>
        <Text>{title.item}</Text>
      </View>
    )
  }
}