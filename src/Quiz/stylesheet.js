import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      // margin: 10,
      // justifyContent: "center",
    },
    scrollView: {
      marginHorizontal: 10,
      marginBottom: 55,
    },
    counter: {
      textAlign: 'center', // <-- the magic
      alignItems: "center",
      fontSize: 20,
    },
    question: {
      textAlign: 'center', 
      // borderRadius: "50px",
      fontSize: 20,
      padding: 20,
      margin: 20,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9'
    },
    wrong_question: {
      textAlign: 'center', 
      padding: 10,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9'
    },
    radiobtn:{
      marginLeft: 20,
      marginRight: 20
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: "#737373",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    separator2: {
      marginVertical: 8,
      borderBottomColor: "#fff",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
