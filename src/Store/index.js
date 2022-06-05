import create from "zustand";

// const useStore = create(set => ({
//   testTotal: 10,
//   increaseTests: () => set(state => ({ testTotal: state.testTotal + 1 })),
//   removeAllTests: () => set({ testTotal: 0 }),
// }))

// { hsk: "0101", bu: "1",
// bu_name: "살아 있는 동물과 동물성 생산품",
// ryu: "1",
// ryu_name: "살아 있는 동물",
// jull: "null",
// jull_name: "null",
// hsk_name: "살아 있는 말 · 당나귀 · 노새 · 버새 "}

const useQ1Store = create((set) => ({
  quizCount: 1,
  students: [
    {
      hsk: "0101",
      hsk_name: [
        "살아 있는 말 · 당나귀 · 노새 · 버새",
        "살아 있는 소",
        "살아 있는 돼지",
        "4번",
        "5번",
      ],
      answer: 0,
      chosen: -1,
    },
    {
      hsk: "0207",
      hsk_name: [
        "제0105호의 가금류의 육과 식용 설육(신선한 것, 냉장하거나 냉동한 것으로 한정한다)",
        "살아 있는 소",
        "살아 있는 돼지",
        "4번",
        "5번",
      ],
      answer: 0,
      chosen: -1,
    },
  ],
  addQuiz: (quizCount) =>
    set((state) => ({
      quizCount: quizCount + 1,
    })),
  addStudent: (student) =>
    set((state) => ({
      students: [
        {
          name: student.name,
          id: Math.random() * 100 + "",
          section: student.section,
        },
        ...state.students,
      ],
    })),
  removeQuiz: (quizCount) =>
    set((state) => ({
      quizCount: quizCount - 1,
    })),
  removeStudent: (id) =>
    set((state) => ({
      currentStudent: state.students.filter((student) => student.id !== id),
    })),
  updateStudent: (student) =>
    set((state) => ({
      students: state.students.map((item) => {
        if (item.id === student.id) {
          return {
            ...item,
            name: student.name,
            section: student.section,
          };
        } else {
          return item;
        }
      }),
    })),
}));

export const useHSKStore = useQ1Store;
