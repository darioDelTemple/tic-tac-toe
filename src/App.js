import React from 'react';
import Board from './components/Board';
import './App.css';

export default class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      boards: [this._createBoard(0)]
    };
  };

  _addBoard() {
    let boards = this.state.boards;
    let id = this.state.boards.length + 1;
    let newBoards = boards.concat([this._createBoard(id)]);
    this.setState({boards: newBoards});
  }

  _createBoard(id) {
    return <Board key={id} />
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
