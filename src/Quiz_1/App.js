import * as React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import customData from "../../assets/json/data_kor.json";
import { useHSKStore } from "../Store/index";
import Quiz_Screen from "./Quiz";
import Result_Screen from "./Result";

const styles = require("./stylesheet");

function Quiz_1_Screen() {
  const quizTotal = useHSKStore((state) => state.quizTotal);
  const quizCount = useHSKStore((state) => state.quizCount);
  const addQuizCount = useHSKStore((state) => state.addQuizCount);

  const quizzes = useHSKStore((state) => state.quizzes);
  const addQuiz = useHSKStore((state) => state.addQuiz);
  const removeQuiz = useHSKStore((state) => state.removeQuiz);
  const updateChosen = useHSKStore((state) => state.updateChosen);
  const updateQuiz = useHSKStore((state) => state.updateQuiz);

  //TODO: 파싱해서 랜덤으로 10문제 뽑기
  //TODO: 뽑은문제 저장
  const Separator = () => <View style={styles.separator} />;
  const Separator2 = () => <View style={styles.separator2} />;

  {
    /* <Text>{JSON.stringify(customData.hsk_2022)}</Text> */
  }
  const ready_quiz_length = quizzes.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {ready_quiz_length > quizCount ? <Quiz_Screen /> 
        : <Result_Screen />}
        </ScrollView>
    </SafeAreaView>
  );
}

export default Quiz_1_Screen;
