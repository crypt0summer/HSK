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
  quizCount: 0,
  quizzes: [
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
  addQuizCount: () =>
    set((state) => ({
      quizCount: state.quizCount + 1,
    })),
  addQuiz: (quiz) =>
    set((state) => ({
        quizzes: [
        {
            hsk: quiz.hsk,
            hsk_name: quiz.hsk_name,
            answer: quiz.answer,
            chosen: quiz.chosen,
        },
        ...state.quizzes,
      ],
    })),
  removeQuiz: (hsk) =>
    set((state) => ({
      currentStudent: state.quizzes.filter((quiz) => quiz.hsk !== hsk),
    })),
  updateQuiz: (quiz) =>
    set((state) => ({
        quizzes: state.quizzes.map((item) => {
        if (item.hsk === quiz.hsk) {
          return {
            ...item,
            hsk_name: quiz.hsk_name,
            answer: quiz.answer,
            chosen: quiz.chosen,
          };
        } else {
          return item;
        }
      }),
    })),
 updateChosen: (chosen, chosen_hsk) =>
    set((state) => ({
        quizzes: state.quizzes.map((item) => {
            if (item.hsk === chosen_hsk) {
              return {
                ...item,
                hsk_name: quiz.hsk_name,
                answer: quiz.answer,
                chosen: quiz.chosen = chosen,
              };
            } else {
              return item;
            }
          }),
    })),
}));

export const useHSKStore = useQ1Store;
