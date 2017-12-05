import React from 'react';
import Square from './components/Square';
import Row from './components/Row';
import Board from './components/Board';
import './App.css';

export default class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      boards: [this._createBoard()]
    };
  };

  _addBoard() {
    console.log("adding board")
    let boards = this.state.boards;
    let newBoards = boards.concat([this._createBoard()]);
    this.setState({boards: newBoards});
  }

  _createBoard() {
    return <Board />
  }

  render() {

    let { boards } = this.state;

    return (
      <div className="App">
        <h1>
          Tic Tac Toe
        </h1>
        <button onClick={this._addBoard.bind(this)}>
          NEW BOARD
        </button>
        {boards}
      </div>
    );
  }
}
