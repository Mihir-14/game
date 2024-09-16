import React from 'react';
import { useNavigate } from 'react-router-dom';

const Game1 = ({ deductMoney }) => {
  const navigate = useNavigate();

  const handleAction = () => {
    deductMoney(10);
  };

  const goToMainMenu = () => {
    navigate('/');
  };

  return (
    <div className="container text-center">
      <h1 className="display-4 mb-4">Welcome to Game 1</h1>
      <button className="btn btn-success btn-lg mb-2" onClick={handleAction}>Play Game 1</button>
      <br />
      <button className="btn btn-secondary btn-lg" onClick={goToMainMenu}>Back to Main Menu</button>
    </div>
  );
};

export default Game1;
