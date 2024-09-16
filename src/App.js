import {useAuth0} from '@auth0/auth0-react'
import './App.css';

function App() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  console.log("Curr:", user);
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated && <h1>Hello {user.name}</h1>}
        {isAuthenticated ? <button onClick={e => logout()}>Logout</button> : <button onClick={e => loginWithRedirect()}>Login to Proceed</button>}
        
      </header>
    </div>
  );
}

export default App;
