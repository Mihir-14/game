import React from 'react';

const Game2 = ({deductMoney}) => {
  const handleAction = () => {
    deductMoney(10);
  }
  return (
    <div>
      <h1>
        Welcome to Game 2
      </h1>
      <button onClick={handleAction}>Play Game 2</button>
    </div>
  )
}

export default Game2
