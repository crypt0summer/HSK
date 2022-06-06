import create from "zustand";

const useQ1Store = create((set) => ({
  quizCount: 0,
  quizTotal: 2,
  quizzes: [
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
  resetQuizCount: () =>
    set((state) => ({
      quizCount: state.quizCount = 0, 
    })),
  removeQuiz: (hsk) =>
    set((state) => ({
      quizzes: state.quizzes.filter((quiz) => quiz.hsk !== hsk),
    })),
  removeAllQuiz: () =>
    set((state) => ({
      quizzes: (state.quizzes = []),
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
            chosen: (quiz.chosen = chosen),
          };
        } else {
          return item;
        }
      }),
    })),
}));

export const useHSKStore = useQ1Store;
