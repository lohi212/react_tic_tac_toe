import { createContext, useState } from "react";
import Game from "./components/Game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

export const GameTypeContextProvider = createContext();

function App() {
  const [gameType, setGameType] = useState("");

  return (
    <GameTypeContextProvider.Provider value={gameType}>
      <Router>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Home setGameType={setGameType} />} />
        </Routes>
      </Router>
    </GameTypeContextProvider.Provider>
  );
}

export default App;
