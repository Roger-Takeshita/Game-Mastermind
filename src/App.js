import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor() {
    super();          //! Super must be called before accessing `this`
    this.state = {    //! State is an object that hold information in its properties
      selColorIdx: 0,
      guesses: [this.getNewGuess(), this.getNewGuess()],
      code: this.genCode()
    };
  };

  getNewGuess() {
    return {
      // code: [null, null, null, null],
      code: [3, 2, 1, 0],
      score: {
        perfect: 0,
        almost: 0
      }
    }
  };
  
  genCode() {
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
  };

  render() {
    return(
      <div className="App">
        Selected color: {colors[this.state.selColorIdx]}
        <button onClick={() => this.setState(state => ({selColorIdx: ++state.selColorIdx % 4}))}>
          Next Color
        </button>
        <header className="App-header">React Mastermind</header>
        <div className="flex-h">
          <GameBoard colors={colors} guesses={this.state.guesses}/>
          <div>
            <ColorPicker colors={colors} selColorIdx={this.state.selColorIdx}/>
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer className="">Footer</footer>
      </div>
    )
  };
}

export default App;
