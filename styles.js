import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  deck:{
    display: "flex",
    height:75,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center"
  },
  separator: {
    width: 60,
    height: 6,
    marginTop: 7,
    marginBottom: 7,
    backgroundColor: "lightcoral",
    alignSelf: "center"
  },
  card:{
    flex:1
  }
});
