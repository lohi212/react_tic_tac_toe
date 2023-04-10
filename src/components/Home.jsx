import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setGameType }) => {
  const navigate = useNavigate();

  const handleGamePage = (type) => {
    setGameType(type);
    navigate("/game");
  };

  return (
    <div className="root-container center-container">
      <div className="column-container">
        <button onClick={() => handleGamePage("2-user")}>2 User</button>
        <button onClick={() => handleGamePage("computer")}>
          Play with computer
        </button>
      </div>
    </div>
  );
};

export default Home;
