import './App.css';
import React from 'react'
import Button from './Components/button';
import Profile from './Components/user';
import Fruit from './fruits';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Button/>
      <Button/>
      <Profile/>
      <Fruit/>
    </div>
  );
}

export default App;
