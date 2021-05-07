import logo from './logo.svg';
import './App.css';
import React from 'react'

function countN() {
  let num = Number.parseInt(document.getElementById('num').value);
  let sum = num * (num + 1) / 2;
  alert('Сумма первых N натуральных чисел: ' + sum);
}

function App() {
  return (
    <div>
      <input type="number" id="num" name="num" />
      <button onClick={countN}>Считать</button>
    </div>
  );
}

export default App;
