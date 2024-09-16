import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
import Game1 from './components/game1/Game1';
import Game2 from './components/game2/Game2';
import { useState } from 'react';

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [money, setMoney] = useState(200);
  const location = useLocation();

  const deductMoney = (amount) => {
    setMoney(prevMoney => (prevMoney >= amount ? prevMoney - amount : prevMoney));
  }
  const addMoney = (amount) => {
    setMoney(prevMoney => prevMoney + amount);
  }

  const shouldShowNav = !['/game1', '/game2'].includes(location.pathname);

  return (
    <div className="container-fluid d-flex flex-column align-items-center min-vh-100 py-5 bg-dark text-light">
      <div className="text-center mb-4">
        {isAuthenticated ? (
          <>
            <h1 className="text-primary mb-2">Hello {user.name}</h1>
            <p className="lead">Cash in Hand: <span className="badge bg-success">₹{money}</span></p>
            {shouldShowNav && (
              <nav>
                <ul className="nav nav-pills mb-3 justify-content-center">
                  <li className="nav-item mx-2">
                    <Link to="/game1" className="btn btn-primary btn-lg shadow-sm text-light">Game 1</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to="/game2" className="btn btn-warning btn-lg shadow-sm text-dark">Game 2</Link>
                  </li>
                </ul>
              </nav>
            )}
            <Routes>
              <Route path="/game1" element={<Game1 deductMoney={() => deductMoney(10)} />} />
              <Route path='/game2' element={<Game2 deductMoney={() => deductMoney(10)} addMoney={addMoney} />} />
            </Routes>
            <button className="btn btn-danger mt-3" onClick={() => logout({ returnTo: window.location.origin })}>
              Logout
            </button>
          </>
        ) : (
          <button className="btn btn-primary btn-lg" onClick={() => loginWithRedirect()}>
            Login to Proceed
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
