import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './App'; // Импортируйте ваш компонент TicTacToe из App.js
import './index.css'; // Импортируйте стили, если есть

ReactDOM.render(
  <TicTacToe />, // Рендерим ваш компонент TicTacToe
  document.getElementById('root')
);
