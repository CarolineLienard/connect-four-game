import { useState } from "react";
import styled from "styled-components";
import { colors, spacing } from "../styles/theme";
import { BlackBox } from "../styles/utils";
import redArrow from "../assets/images/marker-red.svg";
import yellowArrow from "../assets/images/marker-yellow.svg";

const PLAYER_COLORS = {
  red: colors.red,
  yellow: colors.yellow,
};

const GridContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(7, 1fr); /* 7 colonnes */
  grid-template-rows: repeat(6, 1fr); /* 6 lignes */
  width: 605px; /* Largeur de la grille */
  height: 515px; /* Hauteur de la grille */
  gap: ${spacing.spacing300};
  background-color: ${colors.white};
  padding: ${spacing.spacing200} ${spacing.spacing200} ${spacing.spacing600};
  border-radius: 40px;
  ${BlackBox}
`;

const Cell = styled.div`
  background-color: ${(props) => props.$bgColor || colors.purple700};
  border: 3px solid ${colors.black};
  box-shadow: ${(props) =>
    props.$bgColor
      ? "inset 0px 5px 0px 0px rgba(0, 0, 0, 0.5)"
      : `inset 0px 10px 0px 0px ${colors.black}`};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    display: ${(props) => (props.$isWinningCell ? "block" : "none")};
    position: absolute;
    top: 50%;
    left: 50%;
    width: 35%;
    height: 35%;
    border-radius: 50%;
    border: 5px solid white;
    transform: translate(-50%, -50%);
  }
`;

const ArrowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  position: absolute;
  top: -2.6rem;
  justify-items: center;
  width: 98%;
`;

const ArrowImage = styled.img`
  width: 40px;
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
`;

export default function Grid({
  currentPlayer,
  handleClick,
  grid,
  winningCells,
}) {
  const [hoveredCol, setHoveredCol] = useState(8);

  return (
    <GridContainer>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            $bgColor={cell ? PLAYER_COLORS[cell] : null}
            onClick={() => handleClick(colIndex)}
            onMouseEnter={() => setHoveredCol(colIndex)}
            onMouseLeave={() => setHoveredCol(8)}
            $isWinningCell={winningCells.some(
              ([winRow, winCol]) => winRow === rowIndex && winCol === colIndex
            )}
          />
        ))
      )}
      <ArrowWrapper>
        {Array.from({ length: 7 }).map((_, colIndex) => (
          <ArrowImage
            key={colIndex}
            src={currentPlayer === "red" ? redArrow : yellowArrow}
            $visible={hoveredCol === colIndex}
            alt="player arrow"
          />
        ))}
      </ArrowWrapper>
    </GridContainer>
  );
}
