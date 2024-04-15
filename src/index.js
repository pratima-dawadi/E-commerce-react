import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

root.render(
  <Auth0Provider
    domain="dev-68af5oqqpbvwud3g.us.auth0.com"
    clientId="X4cazpghsIJyRqLtWuIdu2D8rHQyROnc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
