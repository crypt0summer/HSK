import * as React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Quiz_1_Screen from "../Quiz_1/App";
import Quiz_2_Screen from "../Quiz_2/App";
import { useHSKStore } from "../Store/index";
const styles = require("./stylesheet");
import customData from "../../assets/json/data_kor.json";


const Separator = () => <View style={styles.separator} />;

function QuizNaviScreen({ navigation }) {
  const json_kor= customData.hsk_2022;
  const json_length = json_kor.length;


  const total_quiz_count = 10;
  const total_option_count = 4;

  const resetQuiz1Count = useHSKStore((state) => state.resetQuizCount);
  const removeAllQuiz1 = useHSKStore((state) => state.removeAllQuiz);
  const addQuiz1 = useHSKStore((state) => state.addQuiz);


  const get_randomArr = (count, min, max) => {
    let arr = new Set();
    while (arr.size < count) {
      arr.add(Math.floor(Math.random() * (max - min) + min));//max값은 포함되지 않음
    }
    console.info("전체 문제 idx:",[...arr]);
    return [...arr];
  };

  Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};
  const get_randomArr_include = (count, min, max, include) => {
    let arr = new Set();
    
    while (arr.size < count) {
      arr.add(Math.floor(Math.random() * (max - min) + min));//max값은 포함되지 않음
    }
    
    //선택지들어갈 index array 만듬
    let idx_arr = [...arr];
    //정답 인덱스를 랜덤으로 넣음
    let answer_idx = Math.floor(Math.random() * (5 - 0) + 0);
    idx_arr.splice(answer_idx, 0, include);

    console.log(idx_arr);
    //선택지 array를 한글 문장으로 바꿈
    const option_array = idx_arr.map(idx => json_kor[idx].hsk_name);

    return [option_array, answer_idx];
  };

  const get_quiz_object = (idx, count, min , max) => {
    const item = json_kor[idx];
    
    let values = get_randomArr_include(count, min, max, idx);
    const options = values[0]
    const answer = values[1]
    const quiz = {
      hsk: item.hsk,
      hsk_name: options,
      answer: answer,
      chosen: -1,
    }
    // console.info("한 문제: ",quiz);
    return quiz;
  };

  const ready_Quiz1 = (quiz_total) => {
    //기존 카운트 리셋
    resetQuiz1Count();
    //기존 문제세트 리셋
    removeAllQuiz1();
    //랜덤으로 n문제 뽑기
    const quiz_idx = get_randomArr(quiz_total, 0, json_length);
    //뽑은 번호의 문제와 정답 만들기
    const quiz_arr = quiz_idx.map(idx => get_quiz_object(idx, total_option_count, 0, json_length));
    // console.log(quiz_arr);
    //뽑은문제 저장
    addQuiz1(quiz_arr);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>1번 유형</Text>
      </View>
      <Separator />
      <View>
        <Button title="Quiz 1" onPress={() => navigation.navigate("Quiz_1")} />
      </View>
      { <View>
        <Button title="Reset" onPress={() => ready_Quiz1(total_quiz_count)} />
      </View> }
      <Separator />
      <View>
        <Text>2번 유형</Text>
      </View>
      <Separator />
      <View>
        <Button title="Quiz 2" onPress={() => navigation.navigate("Quiz_2")} />
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
