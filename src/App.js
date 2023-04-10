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

  return (
    <div className="App">
      <div className="container">
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
