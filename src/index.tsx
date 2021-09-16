import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './app/app';
import "./styles/tailwind.css";

ReactDOM.render(
  <BrowserRouter> <React.StrictMode>
    <App />
  </React.StrictMode>,</BrowserRouter>,

  document.getElementById('root')
);

