import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Button, TextField } from '@material-ui/core';

function countN() {    
  let num = Number.parseInt(document.getElementById('num').value);
  let sum = num * (num + 1) / 2;
  alert('Сумма первых N натуральных чисел: ' + sum);
}

function App() {
  return (
    <div>
      <input type="number" id="num" name="num" />
      <TextField id="standard-basic" label="Enter number" />
      <Button onClick={countN} variant="contained" color="primary">Считать</Button>      
    </div>
  );
}

export default App;
