import logo from "./logo.svg";
import "./App.css";
import Winner from "./components/Winner";
import { useEffect, useState } from "react";
import User from "./components/User";
import Board from "./components/Board";
import { winnerPossibilities } from "./utils";

function App() {
  const [user, setUser] = useState("X");
  const [values, setValues] = useState(new Array(9));
  const [winner, setWinner] = useState("");

  const reset = () => {
    setWinner("");
    setUser("");
    setValues(new Array(9));
  };
  return (
    <div className="App">
      <div className="container">
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
    </div>
  );
}

export default App;
