import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { useHSKStore } from "../Store/index";

function Result_Screen() {
  const quizzes = useHSKStore((state) => state.quizzes);
  const addWrongQuiz = useHSKStore((state) => state.addWrongQuiz);
  const wrongQuizzes = useHSKStore((state) => state.wrongQuizzes);
  const quizTotal = useHSKStore((state) => state.quizTotal);

  useEffect(() => {
    const wrng = quizzes.filter((quizzes) => quizzes.chosen != quizzes.answer);

    for (const item of wrng) {
      addWrongQuiz(item);
    }
  }, []);

  return (
    <View>
      <Text>SCORE: {quizTotal - wrongQuizzes.length}/{quizTotal}</Text>

      {wrongQuizzes.map((item, idx) => (
        <View>
          <Text>{item.hsk}</Text>
          <Text>정답: {item.hsk_name[item.answer]}</Text>
          <Text>정답idx: {item.answer}</Text>
          <Text>오답: {item.hsk_name[item.chosen]}</Text>
          <Text>오답idx: {item.chosen}</Text>

        </View>
      ))}
    </View>
  );
}

export default Result_Screen;
