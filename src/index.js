import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const message = "Hello";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App txt = {message}/>
  </React.StrictMode>
);


