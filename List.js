import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";

import Deck from "./Deck";
import {Separator} from "./Separator";

export default class List extends React.Component {
  state = {
    tests: [{react:{id:1}},{redux:{id:2}},{api:{id:3}},{rest:{id:4}}],
    rawItems: [
      {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      }
    ],
    items: null
  }

  getArrayOfData = (data) => {
    let arrayOfData = [];
    for(key in data){
      arrayOfData.push(data[key]);
    }
    return arrayOfData;
  }

  renderItem = ({item}) => {
    return (
    <TouchableOpacity>
      <Deck {...item} /> 
    </TouchableOpacity>
  )}

  componentDidMount() {
    const items = this.getArrayOfData(this.state.rawItems[0]);
    this.setState({items});
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