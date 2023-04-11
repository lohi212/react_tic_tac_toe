import React from "react";
import { winnerPossibilities } from "../utils";

const Board = ({ values, setValues, user, setUser, winner, gameType }) => {
  const handleClick = (idx) => {
    const newValues = [...values];
    if (!newValues[idx] && !winner) {
      newValues[idx] = user;
      setValues(newValues);

      if (gameType === "computer") handleComputerMove(idx, newValues);
      else handleUser();
    }
  };

  const handleComputerMove = (index, newValues) => {
    for (let i = 0; i < winnerPossibilities.length; i++) {
      let [a, b, c] = winnerPossibilities[i];

      if (ifTwoExits(a, b, c, newValues)) {
        const idx = ifTwoExits(a, b, c, newValues);

        if (idx) {
          newValues[idx] = "O";
          setValues(newValues);
          return;
        }
      }
    }

    for (let i = 0; i < winnerPossibilities.length; i++) {
      let [a, b, c] = winnerPossibilities[i];

      if (ifOneExits(a, b, c, newValues)) {
        const idx = ifOneExits(a, b, c, newValues);

        if (idx) {
          newValues[idx] = "O";
          setValues(newValues);
          return;
        }
      }
    }
  };

  const ifOneExits = (a, b, c, newValues) => {
    if (newValues[a] && !newValues[b] && !newValues[c]) return b;

    if (!newValues[a] && newValues[b] && !newValues[c]) return a;

    if (!newValues[a] && !newValues[b] && newValues[c]) return b;

    return null;
  };

  const ifTwoExits = (a, b, c, newValues) => {
    if (
      newValues[a] &&
      !newValues[b] &&
      newValues[c] &&
      newValues[a] === newValues[c]
    )
      return b;

    if (
      !newValues[a] &&
      newValues[b] &&
      newValues[c] &&
      newValues[b] === newValues[c]
    )
      return a;

    if (
      newValues[a] &&
      newValues[b] &&
      !newValues[c] &&
      newValues[a] === newValues[b]
    )
      return c;

    return null;
  };

  const handleUser = () => {
    if (user === "X") setUser("O");
    else if (user === "O") setUser("X");
  };

  return (
    <div className="grid-container">
      <div onClick={() => handleClick(0)}>{values[0]}</div>
      <div onClick={() => handleClick(1)}>{values[1]}</div>
      <div onClick={() => handleClick(2)}>{values[2]}</div>
      <div onClick={() => handleClick(3)}>{values[3]}</div>
      <div onClick={() => handleClick(4)}>{values[4]}</div>
      <div onClick={() => handleClick(5)}>{values[5]}</div>
      <div onClick={() => handleClick(6)}>{values[6]}</div>
      <div onClick={() => handleClick(7)}>{values[7]}</div>
      <div onClick={() => handleClick(8)}>{values[8]}</div>
    </div>
  );
};

export default Board;
