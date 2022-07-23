import React , { useCallback }from "react";
import {
  View,
  Text,
  SafeAreaView,
  Linking,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizNavigator from "../QuizNavi/App";
import HistoryScreen from "../History/App";
import ContactScreen from "../Contact/App";
import OpenURLBanner from "../commonComp";

const styles = require("./stylesheet");

function HomeScreen({ navigation }) {
  return (
    // <SafeAreaView >
    <View style={styles.mainContainer}>
      <View style={styles.box1}>
        <Text style={styles.box2}>지금 퀴즈 시작하기</Text>

        <Button title="Quiz" onPress={() => navigation.navigate("Quiz")} />

        {/* <View>
        <Text>업적 보기</Text>
      </View>
     
      <View>
        <Button
          title="History"
          onPress={() => navigation.navigate("History")}
        />
      </View> */}

        <Text style={styles.box2}>문의하기</Text>

        <Button
          title="Contact"
          onPress={() => navigation.navigate("Contact")}
        />

        {/* <Image source={require('../../assets/banner.png')} />; */}
      </View>

      <OpenURLBanner url={"https://customsacademy.co.kr/"}/>
      {/* <OpenURLButton url={"https://google.com"}/> */}
      {/* </SafeAreaView> */}
    </View>
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
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ title: "Contact" }}
        />
      </Stack.Navigator>
      {/* <QuizNavigator /> */}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
