import logo from "./logo.svg";
import "./App.css";
import Winner from "./components/Winner";
import { useEffect, useState } from "react";
import User from "./components/User";
import Board from "./components/Board";
import { winnerPossibilities } from "./utils";
import Game from "./components/Game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [gameType, setGameType] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/game" element={<Game gameType={gameType} />} />
        <Route path="/" element={<Home setGameType={setGameType} />} />
      </Routes>
    </Router>
  );
}

export default App;
