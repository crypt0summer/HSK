import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { useHSKStore } from "../Store/index";

function Result_Screen() {
  const resetQuizCount = useHSKStore((state) => state.resetQuizCount);

  return (
    <View>
      <Text>Result</Text>
      <Button title="Reset" onPress={() => resetQuizCount()} />
    </View>
  );
}

export default Result_Screen;
