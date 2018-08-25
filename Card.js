import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default class Card extends React.Component {
  render(){
    return(
      <View>
        <Text style={styles.card}>card</Text>
      </View>
    )
  }
}