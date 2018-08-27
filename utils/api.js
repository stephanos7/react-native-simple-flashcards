import { AsyncStorage } from "react-native";

export const submitEntry =  (key, entry) => {
    return AsyncStorage.setItem(key, JSON.stringify({entry}))

}

const storageKey = "flashcardsDecks"

export const operation = (key, entry) => {
  return AsyncStorage.mergeItem(storageKey, JSON.stringify({[key]:entry}))
};

export const getAll = () => {
    return AsyncStorage.getItem(storageKey)
};