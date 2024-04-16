export type GameStore = {
  game?: {
    id: string,
    score: number
  },
  setGame(game: GameStore["game"]): void
};
