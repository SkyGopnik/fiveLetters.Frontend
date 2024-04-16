import { create } from "zustand";

import { WordsStore } from "./types";

export const useWordsStore = create<WordsStore>((set) => ({
  words: [],
  setWords: (words) => set({ words })
}));
