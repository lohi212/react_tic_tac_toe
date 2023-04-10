import React from "react";

const Board = ({ values, setValues, user, setUser, winner }) => {
  const handleClick = (idx) => {
    const newValues = [...values];
    if (!newValues[idx] && !winner) {
      newValues[idx] = user;
      setValues(newValues);
      handleUser();
    }
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
