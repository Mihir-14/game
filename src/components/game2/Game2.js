import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Game2 = ({ deductMoney, addMoney }) => {
  const [userNumber, setUserNumber] = useState('');
  const [computerNumber, setComputerNumber] = useState(null);
  const [result, setResult] = useState('');
  const navigate = useNavigate();
  const handleInput = (e) => {
    setUserNumber(e.target.value);
  }
  const handleAction = () => {
    const number = parseInt(userNumber, 10);
    if(isNaN(number) || number < 1 || number > 10){
      alert("Please Enter the number in Range: 1 to 10");
      return;
    }

    const compNum = Math.floor(Math.random() * 10) + 1;
    setComputerNumber(compNum);

    if(number > compNum){
      addMoney(10);
      setResult(`Number: ${number} is greater than ${compNum} You Won!!`);
    }else if(number < compNum){
      deductMoney(10);
      setResult(`Number: ${number} is less than ${compNum} You lose`);
    }else{
      setResult(`Number: ${number} is equal to ${compNum} Match is tied`);
    }

  };
  const goToMainMenu = () => {
    navigate('/');
  };



  return (
    <div className="container text-center">
      <h1 className="display-4 mb-4">Welcome to Game 2</h1>
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
      {computerNumber !== null && (
        <div className='mb-4'>
          <p>Computer's Number : {computerNumber}</p>
          <p>{result}</p>
        </div>

      )}
      <button className="btn btn-secondary btn-lg" onClick={goToMainMenu}>Back to Main Menu</button>
    </div>
  );
};

export default Game2;
