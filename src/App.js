import React from 'react';
import Square from './components/Square';
import Row from './components/Row';
import Board from './components/Board';
import './App.css';

export default class App extends React.PureComponent {

  _addBoard() {
    console.log("adding board")
  }

  render() {

    return (
      <div className="App">
        <h1>
          Tic Tac Toe
        </h1>
        <button onClick={this._addBoard.bind(this)}>
          NEW BOARD
        </button>
        <Board />
      </div>
    );
  }
}
