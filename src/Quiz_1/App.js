import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import customData from '../../assets/json/data_kor.json';
import { useStudentStore } from '../Store/index';

function Quiz_1_Screen() {
  const students = useStudentStore(state => state.students);
  const addStudent = useStudentStore(state => state.addStudent);
  const removeStudent = useStudentStore(state => state.removeStudent);
  const updateStudent = useStudentStore(state => state.updateStudent);

  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>q1 Screen</Text>
      {/* <Text>{JSON.stringify(customData.hsk_2022)}</Text> */}
      {students.map(item => (
            <Text>{item.name}</Text>
          ))}
    </View>
  );
}

export default Quiz_1_Screen;
