import React from "react";
import Card from "../components/Card";
import GameButton from "../components/GameButton";
import { colors } from "../styles/theme";

export default function MainMenu() {
  return (
    <div>
      <Card>
        <GameButton label="play vs player" bgColor={colors.yellow} />
        <GameButton label="game rules" />
      </Card>
      <h1>Menu</h1>
      <a href="#/game">Game</a>
      <a href="#/rules">Rules</a>
    </div>
  );
}
