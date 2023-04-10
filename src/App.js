import { useState } from "react";
import Game from "./components/Game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

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
