import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import GameButton from "../components/GameButton";
import { colors, spacing } from "../styles/theme";
import { FlexCSS } from "../styles/utils";
import Icon from "../components/Icon";
import logo from "../assets/images/logo.svg";
import players from "../assets/images/player-vs-player.svg";

const MenuContainer = styled.div`
  ${FlexCSS}
  align-items: center;
  gap: ${spacing.spacing800};
  width: 100%;
`;

const Buttons = styled.div`
  ${FlexCSS}
  gap: ${spacing.spacing300};
  width: 100%;
`;

export default function MainMenu() {
  const navigate = useNavigate();
  return (
    <Card>
      <MenuContainer>
        <Icon src={logo} alt="logo" size={52} />
        <Buttons>
          <GameButton
            label="play vs player"
            bgColor={colors.yellow}
            icon={players}
            onClick={() => navigate("/game")}
          />
          <GameButton label="game rules" onClick={() => navigate("/rules")} />
        </Buttons>
      </MenuContainer>
    </Card>
  );
}
