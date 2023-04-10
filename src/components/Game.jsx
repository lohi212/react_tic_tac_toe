import React, { useState } from "react";
import Board from "./Board";
import User from "./User";
import Winner from "./Winner";

const Game = () => {
  const [user, setUser] = useState("X");
  const [values, setValues] = useState(new Array(9));
  const [winner, setWinner] = useState("");

  const reset = () => {
    setWinner("");
    setUser("");
    setValues(new Array(9));
  };
  return (
    <div>
      <button onClick={reset}>clear</button>
      <Winner
        user={user}
        values={values}
        setWinner={setWinner}
        winner={winner}
      />
      <User user={user} />
      <Board
        setValues={setValues}
        values={values}
        user={user}
        setUser={setUser}
        winner={winner}
      />
    </div>
  );
};

export default Game;
