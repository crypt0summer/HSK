import create from "zustand";

const useHStore = create((set) => ({
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
  
}));

export const useHistoryStore = useHStore;
