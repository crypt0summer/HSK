import * as React from "react";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
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
  
  const updateChosen = useHSKStore((state) => state.updateChosen);
  const updateQuiz = useHSKStore((state) => state.updateQuiz);


 


  const ready_quiz_length = quizzes.length;
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {/* <Text>{json_length}</Text> */}
        {ready_quiz_length === 0 ? (
          <Text>No Questions</Text>
        ) : ready_quiz_length > quizCount ? (
          <Quiz_Screen />
        ) : (
          <Result_Screen />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Quiz_1_Screen;
