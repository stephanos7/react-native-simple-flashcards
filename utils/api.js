import { AsyncStorage } from "react-native";

export const submitEntry =  (key, entry) => {
    return AsyncStorage.setItem(key, JSON.stringify({entry}))

}

const storageKey = "flashcardsDecks"

export const operation = (key, entry) => {
  AsyncStorage.mergeItem(storageKey, JSON.stringify({[key]:entry}), () => {
      AsyncStorage.getItem(storageKey, (err, result) => {
        console.log(result);
      });
    });
}

// export const operation = (key, entry) => {
//   AsyncStorage.mergeItem('key', JSON.stringify(entry), () => {
//       AsyncStorage.getItem('key', (err, result) => {
//         console.log(result);
//       });
//     });
// }

