import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Game2 = ({ deductMoney, addMoney }) => {
  const navigate = useNavigate();
  const [userNumber, setUserNumber] = useState('');
  const [computerNumber, setComputerNumber] = useState(null);
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');
  const [stage, setStage] = useState(1); 

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
    if (isNaN(number) || number < 1 || number > 10) {
      alert('Please Enter a number in the Range: 1 to 10');
      return;
    }

    const compNum = Math.floor(Math.random() * 10) + 1;
    setComputerNumber(compNum);

    let ans;
    switch (operator) {
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
      if (operator === '=') {
        addMoney(20);
        setResult(`Number: ${number} ${operator} ${compNum}  You Won!!`);
      } else {
        addMoney(10);
        setResult(`Number: ${number} ${operator} ${compNum}  You Won!!`);
      }
    } else {
      deductMoney(10);
      setResult(`Number: ${number} ${operator} ${compNum} You Lose`);
    }

    setTimeout(() => {
      setOperator(generateRandomOperator());
      // setStage(1);
      setResult('');
      setComputerNumber('');
    }, 2000);
    setUserNumber('');
  };

  const goToMainMenu = () => {
    navigate('/');
  };

  return (
    <div className="container text-center bg-dark text-light rounded p-4">
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
              placeholder='Enter Your favorite number between 1 to 10'
            />
            <button className="btn btn-info btn-lg mb-2" onClick={handleAction}>Play Game 2</button>
          </div>
          {computerNumber !== null && (
            <div className='mb-4'>
              <p>Computer's Number: {computerNumber}</p>
              <p>{result}</p>
            </div>
          )}
        </div>
      )}
      <button className="btn btn-secondary btn-lg" onClick={goToMainMenu}>Back to Main Menu</button>
    </div>
  );
};

export default Game2;
