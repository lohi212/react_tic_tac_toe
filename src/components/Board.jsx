import React from "react";
import { winnerPossibilities } from "../utils";

const Board = ({ values, setValues, user, setUser, winner, gameType }) => {
  const handleClick = (idx) => {
    const newValues = [...values];
    if (!newValues[idx] && !winner) {
      newValues[idx] = user;
      setValues(newValues);
      handleUser();
      if (gameType === "computer") handleComputerMove(idx);
    }
  };

  const handleComputerMove = (index) => {
    const newValues = [...values];
    for (let i = 0; i > winnerPossibilities.length; i++) {
      let [a, b, c] = winnerPossibilities[i];
      if (ifTwoExits(a, b, c)) {
        const idx = ifTwoExits(a, b, c);
        newValues[index] = user;
        setValues(newValues);
      }
    }
  };

  const ifOneExits = (a, b, c) => {
    if (values[a] && !values[b] && !values[c]) return b;

    if (!values[a] && values[b] && !values[c]) return a;

    if (!values[a] && !values[b] && values[c]) return b;

    return null;
  };

  const ifTwoExits = (a, b, c) => {
    if (values[a] && !values[b] && values[c]) return b;

    if (!values[a] && values[b] && values[c]) return a;

    if (values[a] && values[b] && !values[c]) return c;

    return ifOneExits(a, b, c);
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
