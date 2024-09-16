import { Link } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Game1 from './components/game1/Game1.js';
import Game2 from './components/game2/Game2.js';
import { useState } from 'react';

function App() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  const [money, setMoney] = useState(200);

  const deductMoney = (amount) => {
    setMoney(prevMoney => {
      if(prevMoney >= amount){
        return prevMoney - amount;
      }else{
        return prevMoney
      }
    }
    );
  }

  return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
      {isAuthenticated ? (
        <>
          <div className='d-flex justify-content-center flex-column'>
            <h1 className='text-dark'>Hello {user.name}</h1>
            <div>Cash in Hand: {money}</div>
            <nav>
              <ul>
                <li>
                  <Link to="/game1">Game 1</Link>
                </li>
                <li>
                  <Link to="/game2">Game 2</Link>
                </li>
              </ul>
            </nav>
          </div>
          <button className='btn btn-outline-primary btn-lg' onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </>
      ) : (
        <button className='btn btn-outline-primary btn-lg' onClick={() => loginWithRedirect()}>Login to Proceed</button>
      )}
        <Routes>
          <Route path="/game1" element={<Game1 deductMoney={() => deductMoney(10)} />}/>
          <Route path='/game2' element={<Game2 deductMoney={() => deductMoney(10)} />}/>
        </Routes>
      </div>
  );
}

export default App;
