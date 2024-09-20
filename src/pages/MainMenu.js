import React from "react";
import Card from "../components/Card";

export default function MainMenu() {
  return (
    <div>
      <Card />
      <h1>Menu</h1>
      <a href="#/game">Game</a>
      <a href="#/rules">Rules</a>
    </div>
  );
}
