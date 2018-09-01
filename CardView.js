import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default class CardView extends React.Component {
  render(){
    return(
      <View>
        <Text>{JSON.stringify(this.props.navigation.state.params)}</Text>
      </View>
    )
  }
}