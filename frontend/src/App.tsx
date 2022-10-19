import React from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './pages/Game'

const GAME_WIDTH = 800;
const GAME_HEIGHT = 800;

function App() {
  return (
    <div className="App">
      <Game height={GAME_HEIGHT} width={GAME_WIDTH} />
    </div>
  );
}

export default App;
