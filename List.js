import React from "react";
import { FlatList, TouchableOpacity, View, Button, Text } from "react-native";

import Deck from "./Deck";
import {Separator} from "./Separator";
import {getAll, removeAll} from "./utils/api";

export default class List extends React.Component {
  state = {

  }

  renderItem = (item) => {
    const deck = this.state[item.item];
    return (
    <TouchableOpacity onPress={ () => this.props.navigation.navigate("CardView", {...deck})}>
      <Deck {...this.props} title={item} /> 
    </TouchableOpacity>
  )}

  componentDidMount() {
    getAll()
      .then( res => {
        const items = JSON.parse(res);
        return items;
      })
      .then(items => this.setState({...items}))
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    const data = Object.keys(this.state);
    return(
      <View>
        <FlatList
        data={data}
        ItemSeparatorComponent = { () => (
          <Separator />
        )}
        renderItem={this.renderItem}
        keyExtractor ={ (item, index) => item.concat(index)}
         />
        <Button title="clear" onPress={removeAll} />
      
      <Text>{JSON.stringify(this.state, null, '\t')}</Text>
      </View>
    )
  }
}