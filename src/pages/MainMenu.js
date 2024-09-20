import React from "react";
import Card from "../components/Card";
import GameButton from "../components/GameButton";
import { colors } from "../styles/theme";
import Icon from "../components/Icon";
import logo from "../assets/images/logo.svg";
import players from "../assets/images/player-vs-player.svg"

export default function MainMenu() {
  return (
    <div>
      <Card>
        <Icon src={logo} alt="logo" size={52} />
        <GameButton
          label="play vs player"
          bgColor={colors.yellow}
          icon={players}
        />
        <GameButton label="game rules" />
      </Card>
      <h1>Menu</h1>
      <a href="#/game">Game</a>
      <a href="#/rules">Rules</a>
    </div>
  );
}
