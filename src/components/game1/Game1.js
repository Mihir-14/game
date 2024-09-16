import React from 'react';

const Game1 = ({ deductMoney }) => {
  const handleAction = () => {
    deductMoney(10);
  }
  return (
    <div>
      <h1>
        Welcome to Game 1
      </h1>
      <button onClick={handleAction}>Play Game 1</button>
    </div>
  )
}

export default Game1
