import * as React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizNavigator from "../QuizNavi/App";
import HistoryScreen from "../History/App";
const styles = require("./stylesheet");

const Separator = () => <View style={styles.separator} />;

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>지금 퀴즈 시작하기</Text>
      </View>
      <Separator />
      <View>
        <Button title="Quiz" onPress={() => navigation.navigate("Quiz")} />
      </View>
      <Separator />
      <View>
        <Text>업적 보기</Text>
      </View>
      <Separator />
      <View>
        <Button
          title="History"
          onPress={() => navigation.navigate("History")}
        />
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Quiz"
          component={QuizNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: "History" }}
        />
      </Stack.Navigator>
      {/* <QuizNavigator /> */}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
