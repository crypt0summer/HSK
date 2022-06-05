import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import customData from '../../assets/json/data_kor.json';
import { useHSKStore } from '../Store/index';

function Quiz_1_Screen() {
  const quizCount = useHSKStore(state => state.quizCount);
  const students = useHSKStore(state => state.students);
  const addStudent = useHSKStore(state => state.addStudent);
  const removeStudent = useHSKStore(state => state.removeStudent);
  const updateStudent = useHSKStore(state => state.updateStudent);
  const styles = require("./stylesheet");

  //TODO: 파싱해서 랜덤으로 10문제 뽑기
  //TODO: 뽑은문제 저장
 
  return (
    <View style={styles.container}>
    <Text>{ quizCount }/10</Text>
      {/* <Text>{JSON.stringify(customData.hsk_2022)}</Text> */}
      {/* {students.map(item => (
            <Text>{item.hsk}</Text>
          ))} */}
       <Text>{ students[0].hsk }</Text>
          <Text>{ students[0].hsk_name.map (item => (
            <Text>{item}</Text>
          ))}</Text>   

     
    </View>
  );
}

export default Quiz_1_Screen;
