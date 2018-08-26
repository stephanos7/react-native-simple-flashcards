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
  
  render(){
    return(
      <View>
        <FlatList
        data={this.state.tests}
        ItemSeparatorComponent = { () => (
          <Separator />
        )}
        renderItem={ ({item}) => (
          <TouchableOpacity>
            <Deck /> 
          </TouchableOpacity>
        )}
        keyExtractor ={ (item, index) => {
          let keys = Object.keys(item);
            for(let key of keys){
              return key;
            }
          }}
         />
      </View>
    )
  }
}