import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductProvider from './context/products'
import { CartProvider } from './context/cart'
import { UserProvider } from './context/user'



import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  <UserProvider>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </UserProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
