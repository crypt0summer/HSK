import create from "zustand";

const useQuizStore = create((set) => ({
  quizCount: 0,
  quizTotal: 10,
  quizzes: [
    // {
    //   type: 0, 1 //0이면 hsk 1개에 hsk_name 여러개, 1이면 그 반대   
    //   hsk: [0101],
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
  wrongQuizzes: [],
  addWrongQuiz: (wquiz) =>
    set((state) => ({
      wrongQuizzes: [
        {
          type: wquiz.type,
          hsk: wquiz.hsk,
          hsk_name: wquiz.hsk_name,
          answer: wquiz.answer,
          chosen: wquiz.chosen,
        },
        ...state.wrongQuizzes,
      ],
    })),
  removeAllWrongQuiz: () =>
    set((state) => ({
      wrongQuizzes: (state.wrongQuizzes = []),
    })),
  addQuizCount: () =>
    set((state) => ({
      quizCount: state.quizCount + 1,
    })),
  addQuiz: (quiz) =>
    set((state) => ({
      quizzes: [
        {
          type: quiz.type,
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
      quizCount: (state.quizCount = 0),
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

export const useHSKStore = useQuizStore;
