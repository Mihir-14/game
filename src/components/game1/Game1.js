import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Game1 = ({ deductMoney }) => {
  const navigate = useNavigate();
  const [stage, setStage] = useState(1);
  // eslint-disable-next-line
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  // eslint-disable-next-line
  const calculateWinner = (square) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 6],
      [0, 4, 8], [2, 4, 6] 
    ];
    for(let [a,b,c] of lines){
      if(square[a] && square[a] === square[b] && square[a] === square[c]){
        return square[a];
      }
    }
    return null;
  }


  const handleStartGame = () => {
    setStage(2);
  }


  const handleAction = () => {
    deductMoney(10);
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setStage(1);
  }
  const goToMainMenu = () => {
    navigate('/');
  };

  return (
    <div className="container text-center bg-dark text-light rounded p-4">
      <h1 className="display-4 mb-4">Welcome to Game 1</h1>
      {stage === 1 && (
        <div className='mb-4'>
          <button className="btn btn-info btn-lg mb-2" onClick={handleStartGame}>Start Game</button>
        </div>
      )}
      {stage === 2 && (
        <>
          <div className='mb-4'>
            {/* {renderBoard} */} Board
          </div>
          <div className="d-flex justify-content-around">
            {winner && <h2 className='mt-3'>Winner: {winner}</h2>}
            {/* {!winner && <h2 className='mt-3'>It's a draw</h2>} */}
            <button className="btn btn-success btn-lg mb-2" onClick={handleAction}>Play Game 1</button>
            <button className="btn btn-success btn-lg mb-2" onClick={resetGame}>Restart Game</button>
          </div>
        </>
      )}
      <button className="btn btn-secondary btn-lg" onClick={goToMainMenu}>Back to Main Menu</button>
    </div>
  );
};

export default Game1;
