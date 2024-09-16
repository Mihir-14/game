import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Game2 = ({ deductMoney, addMoney }) => {
  const [userNumber, setUserNumber] = useState('');
  const [computerNumber, setComputerNumber] = useState(null);
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');
  const [stage, setStage] = useState(1); 
  const navigate = useNavigate();

  const generateRandomOperator = () => {
    const operators = ['<', '>', '='];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
  };

  const handleStartGame = () => {
    setOperator(generateRandomOperator());
    setStage(2);
  };

  const handleInput = (e) => {
    setUserNumber(e.target.value);
  };

  const handleAction = () => {
    const number = parseInt(userNumber, 10);
    if ( number < 1 || number > 10 ) {
      alert('Please Enter the number in Range: 1 to 10');
      return;
    }

    const compNum = Math.floor(Math.random() * 10) + 1;
    const newOperator = generateRandomOperator();
    
    setComputerNumber(compNum);
    setOperator(newOperator);

    let ans;
    switch (newOperator) {
      case '<':
        ans = number < compNum;
        break;
      case '>':
        ans = number > compNum;
        break;
      case '=':
        ans = number === compNum;
        break;
      default:
        ans = false;
    }

    if (ans) {
      if(newOperator === '='){
        addMoney(20);
        setResult(`Number: ${number} ${newOperator} ${compNum} You Won!!`);
      }
      addMoney(10);
      setResult(`Number: ${number} ${newOperator} ${compNum} You Won!!`);
    } else {
      deductMoney(10);
      setResult(`Number: ${number} ${newOperator} ${compNum} You Lose`);
    }
    setUserNumber('');
  };

  const goToMainMenu = () => {
    navigate('/');
  };

  return (
    <div className="container text-center">
      <h1 className="display-4 mb-4">Welcome to Game 2</h1>
      {stage === 1 && (
        <div className='mb-4'>
          <button className="btn btn-info btn-lg mb-2" onClick={handleStartGame}>Start Game</button>
        </div>
      )}
      {stage === 2 && (
        <div>
          <h2>Operator: {operator}</h2>
          <div className='mb-4'>
            <input
              type='number'
              min={1}
              max={10}
              value={userNumber}
              onChange={handleInput}
              className='form-control mb-2'
              placeholder='Enter Your fav number between 1 to 10'
            />
            <button className="btn btn-info btn-lg mb-2" onClick={handleAction}>Play Game 2</button>
          </div>
        </div>
      )}
      {computerNumber !== null && (
        <div className='mb-4'>
          <p>Computer's Number: {computerNumber}</p>
          <p>{result}</p>
        </div>
      )}
      <button className="btn btn-secondary btn-lg" onClick={goToMainMenu}>Back to Main Menu</button>
    </div>
  );
};

export default Game2;
