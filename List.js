import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";

import Deck from "./Deck";
import {Separator} from "./Separator";
import {getAll} from "./utils/api";

export default class List extends React.Component {
  state = {
    tests: [{react:{id:1}},{redux:{id:2}},{api:{id:3}},{rest:{id:4}}],
    items: null
  }

  renderItem = ({item}) => {
    return (
    <TouchableOpacity>
      <Deck {...item} /> 
    </TouchableOpacity>
  )}

  componentDidMount() {
    getAll()
      .then( res => {
        const items = JSON.parse(res);
        return items;
      })
      .then(items => this.setState({items}))
      .catch(err => {
        console.log(err)
      })
  }
  
  render(){
    return(
      <View>
        <FlatList
        data={this.state.items}
        ItemSeparatorComponent = { () => (
          <Separator />
        )}
        renderItem={this.renderItem}
        // keyExtractor ={ (item, index) => {
        //   let keys = Object.keys(item);
        //   return keys[0];
        //   }}
         />
      <Text>{JSON.stringify(this.state.items)}</Text>
      </View>
    )
  }
}