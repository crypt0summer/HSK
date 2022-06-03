import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import customData from '../../assets/json/data_kor.json';

function Quiz_1_Screen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>q1 Screen</Text>
      <Text>{JSON.stringify(customData.hsk_2022)}</Text>
    </View>
  );
}

export default Quiz_1_Screen;
