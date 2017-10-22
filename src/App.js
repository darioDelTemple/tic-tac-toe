import React from 'react';
import Square from './components/Square';
import Row from './components/Row';
import Board from './components/Board';
import './App.css';

export default class App extends React.PureComponent {

  render() {

    let boardContent = [['', '', ''],
                        ['', '', ''],
                        ['', '', '']];

    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Board
          boardContent={boardContent}
        />
      </div>
    );
  }
}
