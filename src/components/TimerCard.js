import styled from "styled-components";
import cardRed from "../assets/images/timer-red.svg";
import cardYellow from "../assets/images/timer-yellow.svg";
import { FlexCSS } from "../styles/utils";
import { HeadingXS, HeadingL, colors, pxToRem, spacing } from "../styles/theme";
import { getPlayerColor } from "../utils/helper";

const ShapedCard = styled.div`
  width: ${pxToRem(197)};
  height: ${pxToRem(165)};
  background-image: ${(props) =>
    getPlayerColor(props.$player) ? `url(${cardRed})` : `url(${cardYellow})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  ${FlexCSS}
  align-items: center;
`;

const Content = styled.div`
  ${FlexCSS}
  align-items: center;
  margin-top: ${spacing.spacing200};
`;

export default function TimerCard({ time, playerTurn, ...props }) {
  const handleTextColor = getPlayerColor(playerTurn)
    ? colors.white
    : colors.black;

  return (
    <ShapedCard $player={playerTurn} {...props}>
      <Content>
        <HeadingXS $textColor={handleTextColor}>
          {playerTurn.toUpperCase()}'S TURN
        </HeadingXS>
        <HeadingL $textColor={handleTextColor}>{time}s</HeadingL>
      </Content>
    </ShapedCard>
  );
}
