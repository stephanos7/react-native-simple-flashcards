import { AsyncStorage } from "react-native";

const storageKey = "flashcards:decks";

export const submitEntry = ({entry, key}) => {
  return AsyncStorage.mergeItem(storageKey, JSON.stringify({
    [key]:entry
  }))
}

