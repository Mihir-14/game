import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-ok8h3fbzrnzt1ohc.us.auth0.com"
    clientId="3RNWeCbxkhsKzd8fHlyH7AmmCiNXuETR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
