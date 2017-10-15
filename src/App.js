import React from 'react';
import Board from './components/Board';
import './App.css';

export default class App extends React.PureComponent {

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}
