import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import customData from "../../assets/json/data_kor.json";
import { useHSKStore } from "../Store/index";
import { RadioButton } from "react-native-paper";
const styles = require("./stylesheet");

function Quiz_1_Screen() {
  const quizCount = useHSKStore((state) => state.quizCount);
  const addQuizCount = useHSKStore((state) => state.addQuizCount);

  const quizzes = useHSKStore((state) => state.quizzes);
  const addQuiz = useHSKStore((state) => state.addQuiz);
  const removeQuiz = useHSKStore((state) => state.removeQuiz);
  const updateQuiz = useHSKStore((state) => state.updateQuiz);


  //TODO: 파싱해서 랜덤으로 10문제 뽑기
  //TODO: 뽑은문제 저장
  const Separator = () => <View style={styles.separator} />;
  const Separator2 = () => <View style={styles.separator2} />;

        {/* <Text>{JSON.stringify(customData.hsk_2022)}</Text> */}
        // {
        //   hsk: "0101",
        //   hsk_name: [
        //     "살아 있는 말 · 당나귀 · 노새 · 버새",
        //     "살아 있는 소",
        //     "살아 있는 돼지",
        //     "4번",
        //     "5번",
        //   ],
        //   answer: 0,
        //   chosen: -1,
        // },
        
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Separator />
        <Text style={styles.counter}>{quizCount}/10</Text>
        <Separator />
        <Separator2 />
        <Text style={styles.question}>{quizzes[0].hsk}</Text>
        <Separator2 />
        <Separator2 />
        <RadioButton.Group value={quizzes[0].chosen}> 
        {/* onValueChange={newValue => setValue(newValue)}  */}
          {quizzes[0].hsk_name.map((item, idx) => (
            
              <View key={idx}>
                
                <RadioButton value={idx} name=">" />
                <Text>{item}</Text>
              </View>
            
          ))}
       </RadioButton.Group>
      </View>
    </SafeAreaView>
  );
}

export default Quiz_1_Screen;
