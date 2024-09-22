export const rules = {
  objective:
    "Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).",
  rules: [
    {
      id: 1,
      description: "Red goes first in the first game.",
    },
    {
      id: 2,
      description:
        "Players must alternate turns, and only one disc can be dropped in each turn. ",
    },
    {
      id: 3,
      description: "The game ends when there is a 4-in-a-row or a stalemate..",
    },
    {
      id: 4,
      description:
        "The starter of the previous game goes second on the next game.",
    },
  ],
};
