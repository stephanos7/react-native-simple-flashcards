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
    margin: 50,
    backgroundColor: "white"
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightcoral"
  },
  question: {
    fontSize: 32,
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  }
});
