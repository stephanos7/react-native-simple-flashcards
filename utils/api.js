import { AsyncStorage } from "react-native";

export const submitEntry =  (key, entry) => {
    return AsyncStorage.setItem(key, JSON.stringify({entry}))

}

export const operation = (key, entry) => {
  AsyncStorage.setItem('key', JSON.stringify(entry), () => {
      AsyncStorage.getItem('key', (err, result) => {
        console.log(result);
      });
    });
}

