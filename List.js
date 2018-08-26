import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";

import Deck from "./Deck";
import {Separator} from "./Separator";

export default class List extends React.Component {
  state = {
    tests: [{react:{id:1}},{redux:{id:2}},{api:{id:3}},{rest:{id:4}}],
    items: [
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
    ]
  }
  renderItem = ({item}) => {
    const keys = Object.keys(item);
    const deckName = keys[0];
    return (
    <TouchableOpacity>
      <Deck deckName={deckName} {...item} /> 
    </TouchableOpacity>
  )}
  
  render(){
    return(
      <View>
        <FlatList
        data={this.state.tests}
        ItemSeparatorComponent = { () => (
          <Separator />
        )}
        renderItem={this.renderItem}
        keyExtractor ={ (item, index) => {
          let keys = Object.keys(item);
          return keys[0];
          }}
         />
      </View>
    )
  }
}