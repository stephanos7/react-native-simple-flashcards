import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default class CardView extends React.Component {
  render(){
    return(
      <View>
        <Text style={styles.card}>view for card</Text>
      </View>
    )
  }
}