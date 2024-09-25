import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PageContainer } from "../styles/utils";
import HeaderMenu from "../components/HeaderMenu";
import { colors, spacing } from "../styles/theme";
import PlayerPoints from "../components/PlayerPoints";
import Grid from "../components/Grid";
import ShapedCard from "../components/TimerCard";
import InGameMenu from "../components/InGameMenu";
import WinCard from "../components/WinCard";

const GamePage = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing.spacing900};
`;

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${spacing.spacing500};
  width: 100%;
`;

const PointsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.spacing500};
`;

const Timer = styled(ShapedCard)`
  margin-top: -2.5rem;
  z-index: 10;
`;

const WinContainer = styled.div`
  background-color: ${(props) =>
    props.$hasWon
      ? props.$currentPlayer === "red"
        ? colors.red
        : colors.yellow
      : colors.purple800};
  position: fixed;
  width: 100%;
  min-height: 50%;
  bottom: 0;
  border-radius: 60px 60px 0 0;
`;

export default function Game() {
  const navigate = useNavigate();
  const initialGrid = Array(6)
    .fill(null)
    .map(() => Array(7).fill(null));
  const [grid, setGrid] = useState(initialGrid);
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [nextPlayer, setNextPlayer] = useState("red");
  const [winningCells, setWinningCells] = useState([]);
  const [points, setPoints] = useState({ red: 0, yellow: 0 });
  const [timer, setTimer] = useState(15);
  const [isOpen, setIsOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  const resetTimer = () => setTimer(15);

  useEffect(() => {
    let countdown;
    if (!isPaused && !hasWon && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0 && !hasWon) {
      setCurrentPlayer((prev) => (prev === "red" ? "yellow" : "red"));
      resetTimer();
    }
    return () => clearInterval(countdown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, timer, hasWon]);

  const checkDirection = (grid, row, col, player, rowDir, colDir) => {
    const winningCells = [];
    for (let i = 0; i < 4; i++) {
      const newRow = row + i * rowDir;
      const newCol = col + i * colDir;
      if (
        newRow < 0 ||
        newRow >= 6 ||
        newCol < 0 ||
        newCol >= 7 ||
        grid[newRow][newCol] !== player
      ) {
        return { victory: false };
      }
      winningCells.push([newRow, newCol]);
    }
    return { victory: true, cells: winningCells };
  };

  const checkVictory = (grid, player) => {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        const directions = [
          { rowDir: 0, colDir: 1 }, // Horizontal
          { rowDir: 1, colDir: 0 }, // Vertical
          { rowDir: 1, colDir: 1 }, // Diagonal Descendante
          { rowDir: 1, colDir: -1 }, // Diagonal Montante
        ];
        for (let { rowDir, colDir } of directions) {
          const result = checkDirection(grid, row, col, player, rowDir, colDir);
          if (result.victory) return result;
        }
      }
    }
    return { victory: false };
  };

  const handleClick = (colIndex) => {
    if (winningCells.length > 0 || hasWon) return; // Ne pas continuer si le jeu est gagné
    const newGrid = [...grid];
    for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
      if (!newGrid[rowIndex][colIndex]) {
        newGrid[rowIndex][colIndex] = currentPlayer;
        const { victory, cells } = checkVictory(newGrid, currentPlayer);
        if (victory) {
          setWinningCells(cells);
          setHasWon(true);
          setPoints((prevPoints) => ({
            ...prevPoints,
            [currentPlayer]: prevPoints[currentPlayer] + 1,
          }));
        } else if (newGrid.every((row) => row.every((cell) => cell !== null))) {
          setTimeout(() => {
            alert("Match nul !");
            resetGrid();
          }, 600);
        } else {
          setGrid(newGrid);
          setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
          resetTimer();
        }
        break;
      }
    }
  };

  const resetGrid = () => {
    setGrid(initialGrid);
    setWinningCells([]);
    setHasWon(false);
    setCurrentPlayer(nextPlayer === "red" ? "yellow" : "red");
    setNextPlayer(nextPlayer === "red" ? "yellow" : "red");
    resetTimer();
  };

  const openMenu = () => {
    setIsOpen(true);
    setIsPaused(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsPaused(false);
  };

  const handleRestart = () => {
    setPoints({ red: 0, yellow: 0 });
    resetGrid();
    setIsOpen(false);
    setIsPaused(false);
  };

  return (
    <GamePage>
      <InGameMenu
        isOpen={isOpen}
        onClose={closeMenu}
        restart={handleRestart}
        quit={() => navigate("/")}
      />
      <GameContainer>
        <PointsContainer>
          <PlayerPoints player="1" points={points.red} />
        </PointsContainer>
        <GridContainer>
          <HeaderMenu menu={openMenu} restart={resetGrid} />
          <Grid
            currentPlayer={currentPlayer}
            handleClick={handleClick}
            grid={grid}
            winningCells={winningCells}
          />
        </GridContainer>
        <PointsContainer>
          <PlayerPoints player="2" points={points.yellow} />
        </PointsContainer>
      </GameContainer>
      {hasWon ? (
        <WinCard onClick={resetGrid} playerWin={currentPlayer} />
      ) : (
        <Timer time={timer} playerTurn={currentPlayer} />
      )}
      <WinContainer $currentPlayer={currentPlayer} $hasWon={hasWon} />
    </GamePage>
  );
}
