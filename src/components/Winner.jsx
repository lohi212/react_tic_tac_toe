import React, { useEffect, useState } from "react";
import { winnerPossibilities } from "../utils";

const Winner = ({ user, values, winner, setWinner }) => {
  useEffect(() => {
    if (values.length > 2) {
      const value = handleWinner();
      setWinner(value);
    }
  }, [values]);

  const handleWinner = () => {
    for (let i = 0; i < winnerPossibilities.length; i++) {
      const [a, b, c] = winnerPossibilities[i];
      if (
        values[a] &&
        values[b] &&
        values[c] &&
        values[a] === values[b] &&
        values[b] === values[c]
      )
        return values[a];
      return;
    }
  };

  return winner ? <div>Winner: {user} !</div> : <></>;
};

export default Winner;
