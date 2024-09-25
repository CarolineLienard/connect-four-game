import styled from "styled-components";
import StandardButton from "./StandardButton";
import Card from "./Card";
import { colors, HeadingL, HeadingXS, pxToRem, spacing } from "../styles/theme";

const Win = styled(Card)`
  gap: 0;
  margin-top: -2.5rem;
  z-index: 10;
  max-width: ${pxToRem(285)};
  padding: ${spacing.spacing200};
  border-radius: 20px;
`;

export default function WinCard({ playerWin, onClick }) {
  return (
    <Win bgColor={colors.white}>
      <HeadingXS>{`${playerWin}'s player`.toUpperCase()}</HeadingXS>
      <HeadingL>WINS</HeadingL>
      <StandardButton label="play again" onClick={onClick} />
    </Win>
  );
}
