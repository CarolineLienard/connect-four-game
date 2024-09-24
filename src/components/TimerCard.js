import styled from "styled-components";
import cardRed from "../assets/images/timer-red.svg";
import cardYellow from "../assets/images/timer-yellow.svg";
import { FlexCSS } from "../styles/utils";
import { HeadingXS, HeadingL, colors, pxToRem, spacing } from "../styles/theme";

const ShapedCard = styled.div`
  width: ${pxToRem(197)};
  height: ${pxToRem(165)};
  background-image: ${(props) =>
    props.$player === "red" ? `url(${cardRed})` : `url(${cardYellow})`};
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
  return (
    <ShapedCard $player={playerTurn} {...props}>
      <Content>
        <HeadingXS
          $textColor={playerTurn === "red" ? colors.white : colors.black}
        >
          {playerTurn.toUpperCase()}'S TURN
        </HeadingXS>
        <HeadingL
          $textColor={playerTurn === "red" ? colors.white : colors.black}
        >
          {time}s
        </HeadingL>
      </Content>
    </ShapedCard>
  );
}
