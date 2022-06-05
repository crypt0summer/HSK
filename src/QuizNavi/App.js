import * as React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Quiz_1_Screen from "../Quiz_1/App";
import Quiz_2_Screen from "../Quiz_2/App";
const styles = require("./stylesheet");

const Separator = () => <View style={styles.separator} />;

function QuizNaviScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>1번 유형</Text>
      </View>
      <Separator />
      <View>
        <Button title="Quiz 1" onPress={() => navigation.navigate("Quiz_1")} />
      </View>
      <Separator />
      <View>
        <Text>2번 유형</Text>
      </View>
      <Separator />
      <View>
        <Button
          title="Quiz 2"
          onPress={() => navigation.navigate("Quiz_2")}
        />
      </View>
    </SafeAreaView>
  );
}
const Stack = createNativeStackNavigator();

const QuizNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="QuizHome">
      <Stack.Screen
        name="QuizHome"
        component={QuizNaviScreen}
        options={{ title: "Select Quiz" }}
      />
      <Stack.Screen
        name="Quiz_1"
        component={Quiz_1_Screen}
        options={{ title: "세번으로 호의용어 찾기" }}
      />
      <Stack.Screen
        name="Quiz_2"
        component={Quiz_2_Screen}
        options={{ title: "Quiz_2_Screen" }}
      />
    </Stack.Navigator>
  );
};

export default QuizNavigator;
