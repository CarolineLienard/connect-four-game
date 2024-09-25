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
    props.$hasWon && props.$currentPlayer === "red"
      ? colors.red
      : props.$hasWon && props.$currentPlayer === "yellow"
      ? colors.yellow
      : colors.purple800};
  position: fixed;
  width: 100%;
  min-height: 50%;
  bottom: 0;
  border-radius: 60px 60px 0 0;
`;

export default function Game() {
  const navigate = useNavigate();
  const [grid, setGrid] = useState(
    Array(6)
      .fill(null)
      .map(() => Array(7).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [nextPlayer, setNextPlayer] = useState("red");
  const [winningCells, setWinningCells] = useState([]);
  const [points, setPoints] = useState({ red: 0, yellow: 0 });
  const [timer, setTimer] = useState(15);
  const [isOpen, setIsOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    if (!hasWon) {
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            handleTimeout();
            return 15;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer, hasWon]);

  const handleTimeout = () => {
    setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
    resetTimer();
  };

  const resetTimer = () => {
    setTimer(15);
  };

  const checkDirection = (
    grid,
    row,
    col,
    player,
    rowDir,
    colDir,
    winningCells
  ) => {
    winningCells.length = 0;
    for (let i = 0; i < 4; i++) {
      const currentRow = row + i * rowDir;
      const currentCol = col + i * colDir;
      if (
        currentRow < 0 ||
        currentRow >= 6 ||
        currentCol < 0 ||
        currentCol >= 7 ||
        grid[currentRow][currentCol] !== player
      ) {
        return false;
      }
      winningCells.push([currentRow, currentCol]);
    }
    return true;
  };

  const checkVictory = (grid, player) => {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        let winningCells = [];
        if (
          checkDirection(grid, row, col, player, 0, 1, winningCells) || // Horizontale
          checkDirection(grid, row, col, player, 1, 0, winningCells) || // Verticale
          checkDirection(grid, row, col, player, 1, 1, winningCells) || // Diagonale descendante
          checkDirection(grid, row, col, player, 1, -1, winningCells) // Diagonale montante
        ) {
          return { victory: true, cells: winningCells };
        }
      }
    }
    return { victory: false };
  };

  const handleClick = (colIndex) => {
    if (winningCells.length > 0) return;
    const newGrid = [...grid];
    for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
      if (!newGrid[rowIndex][colIndex]) {
        newGrid[rowIndex][colIndex] = currentPlayer;
        const { victory, cells } = checkVictory(newGrid, currentPlayer);
        if (victory) {
          setWinningCells(cells);
          setPoints((prevPoints) => ({
            ...prevPoints,
            [currentPlayer]: prevPoints[currentPlayer] + 1,
          }));
          setHasWon(true);
          setGrid(newGrid);
        } else {
          const isGridFull = newGrid.every((row) =>
            row.every((cell) => cell !== null)
          );
          if (isGridFull) {
            setGrid(newGrid);
            setTimeout(() => {
              alert("Match nul !");
              resetGrid();
            }, 600);
          } else {
            setGrid(newGrid);
            setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
            resetTimer();
          }
        }
        break;
      }
    }
  };

  const resetGrid = () => {
    setGrid(
      Array(6)
        .fill(null)
        .map(() => Array(7).fill(null))
    );
    setWinningCells([]);
    setHasWon(false);
    const nextStartingPlayer = nextPlayer === "red" ? "yellow" : "red";
    setCurrentPlayer(nextStartingPlayer);
    setNextPlayer(nextStartingPlayer);
    resetTimer();
  };

  const handleMenu = () => {
    setIsOpen(true);
    setIsPaused(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsPaused(false);
  };

  const handleReset = () => {
    setPoints({ red: 0, yellow: 0 });
    setIsOpen(false);
    setIsPaused(false);
    resetGrid();
  };

  useEffect(() => {
    let interval = null;
    if (!isPaused && !hasWon && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 || hasWon) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused, timer, hasWon]);

  return (
    <GamePage>
      <InGameMenu
        isOpen={isOpen}
        onClose={handleClose}
        restart={handleReset}
        quit={() => navigate("/")}
      />
      <GameContainer>
        <PointsContainer>
          <PlayerPoints player="1" points={points.red} />
        </PointsContainer>
        <GridContainer>
          <HeaderMenu menu={handleMenu} restart={resetGrid} />
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
