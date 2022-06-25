import * as React from "react";
import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import { useHSKStore } from "../../Store/index";
import { RadioButton } from "react-native-paper";
const styles = require("../stylesheet");

function Quiz_Screen() {
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

  return (
    <View>
      <View>
        <Separator />
        <Text style={styles.counter}>{quizCount + 1}/10</Text>
        <Separator />
        <Text style={styles.question}>{quizzes[quizCount].hsk_name}</Text>
        <Separator2 />

        {quizzes[quizCount].hsk.map((item, idx) => (
          
          <RadioButton.Group
            key={idx}
            onValueChange={(newValue) =>
              updateQuiz({
                hsk: quizzes[quizCount].hsk,
                hsk_name: quizzes[quizCount].hsk_name,
                answer: quizzes[quizCount].answer,
                chosen: newValue,
              })
            }
            value={quizzes[quizCount].chosen}
          >
            <View style={styles.radiobtn}>
              <RadioButton value={idx} />
              <Text>{item}</Text>
            </View>
          </RadioButton.Group>
        ))
        }
      </View>
      <Separator />

      <Button
        // TODO 답 골랐을때만 활성화되게 하기
        title="Next"
        onPress={() => addQuizCount()}
      />
    </View>
  );
}

export default Quiz_Screen;
