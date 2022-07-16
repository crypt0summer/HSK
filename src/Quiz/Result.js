import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useHSKStore } from "../Store/index";
const styles = require("./stylesheet");

function Result_Screen() {
  const quizzes = useHSKStore((state) => state.quizzes);
  const addWrongQuiz = useHSKStore((state) => state.addWrongQuiz);
  const wrongQuizzes = useHSKStore((state) => state.wrongQuizzes);
  const quizTotal = useHSKStore((state) => state.quizTotal);

  const Separator = () => <View style={styles.separator} />;
  const Separator2 = () => <View style={styles.separator2} />;

  useEffect(() => {
    const wrng = quizzes.filter((quizzes) => quizzes.chosen != quizzes.answer);

    for (const item of wrng) {
      addWrongQuiz(item);
    }
  }, []);

  return (
    <View>
      <Separator />
      <Text style={{ textAlign: "center" , fontWeight: "bold"}}>
        SCORE: {quizTotal - wrongQuizzes.length} / {quizTotal}
      </Text>
      <Separator />
      <Separator2 />

      <ScrollView>
        {wrongQuizzes.map((item, idx) => (
          <View key={idx}>
            {item.hsk > 1 ? (
              <WrongContainer_q1
                hsk={item.hsk}
                hsk_name={item.hsk_name}
                answer={item.answer}
                chosen={item.chosen}
              />
            ) : (
              <WrongContainer_q2
                hsk={item.hsk}
                hsk_name={item.hsk_name}
                answer={item.answer}
                chosen={item.chosen}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const WrongContainer_q1 = (item) => {
  return (
    <View>
      <Text style={styles.wrong_question}>{item.hsk}</Text>
      <Text style={{ color: "green" }}>정답: {item.hsk_name[item.answer]}</Text>
      {/* <Text>정답idx: {item.answer}</Text> */}
      <Text style={{ color: "red" }}>
        내 오답: {item.hsk_name[item.chosen]}
      </Text>
      {/* <Text>오답idx: {item.chosen}</Text> */}
    </View>
  );
};

const WrongContainer_q2 = (item) => {
  return (
    <View>
      <Text style={styles.wrong_question}>{item.hsk_name}</Text>
      <Text style={{ color: "green" }}>정답: {item.hsk[item.answer]}</Text>
      {/* <Text>정답idx: {item.answer}</Text> */}
      <Text style={{ color: "red" }}>내 오답: {item.hsk[item.chosen]}</Text>
      {/* <Text>오답idx: {item.chosen}</Text> */}
    </View>
  );
};

export default Result_Screen;
