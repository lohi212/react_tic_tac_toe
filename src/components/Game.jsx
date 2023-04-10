import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "./Board";
import User from "./User";
import Winner from "./Winner";

const Game = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("X");
  const [values, setValues] = useState(new Array(9));
  const [winner, setWinner] = useState("");

  const reset = () => {
    setWinner("");
    setUser("X");
    setValues(new Array(9));
  };

  return (
    <div className="root-container center-container column-container">
      <button onClick={reset}>Clear</button>
      <button onClick={() => navigate("/")}>Home</button>
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
