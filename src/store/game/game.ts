import { create } from "zustand";

import { GameStore } from "./types";

export const useGameStore = create<GameStore>((set) => ({
  game: undefined,
  setGame: (game) => set({ game })
}));
