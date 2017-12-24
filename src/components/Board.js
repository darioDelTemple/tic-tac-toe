import React from 'react';
import Row from './Row';

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = this._getInitialState();
  };

  _checkRow(board, row) {
    let first = board[row][0];

    if (first === '') {
      return;
    } else {
      for (let col = 1; col < board[row].length; col++) {
        if (first !== board[row][col]) {
          return;
        }
      }
    }

    return first;
  }

  _checkColumn(board, column) {
    let first = board[0][column];

    if (first === '') {
      return;
    } else {
      for (let row = 1; row < board[column].length; row++) {
        if (first !== board[row][column]) {
          return;
        }
      }
    }

    return first;
  }

  _checkColumns(board) {
    for (let column = 0; column < board.length; column++) {
      let columnWinner = this._checkColumn(board, column);

      if (columnWinner) {
        return columnWinner;
      }
    }
  }

  _checkRows(board) {
    for (let row = 0; row < board.length; row++) {
      let rowWinner = this._checkRow(board, row);

      if (rowWinner) {
        return rowWinner;
      }
    }
  }

  _checkLeftDiagonal(board) {
    let first = board[0][0];

    if (first === '') {
      return;
    } else {
      for (let i = 1; i < board.length; i++) {
        if (first !== board[i][i]) {
          return;
        }
      }
    }

    return first;
  }

  _checkRightDiagonal(board) {
    let row = 0;
    let col = 2;
    let first = board[row][col];


    if (first === '') {
      return;
    } else {
      for (let k = 1; k < board.length; k++) {
        if (first !== board[row + k][col - k]) {
          return;
        }
      }
    }

    return first;
  }

  _checkWinner(board) {

    let diagWinner = this._checkLeftDiagonal(board) || this._checkRightDiagonal(board);
    return this._checkRows(board) || this._checkColumns(board) || diagWinner;

  }

  _getMessage(state) {
    let message;

    if (state.winner) {
      message = `${state.winner} wins!`;
    } else if (state.turns > 9) {
      message = 'It\'s a tie!';
    } else {
      message = this._getCurrentPlayer(state) + ' goes next!';
    }

    return message;
  }


  _handleClick(row, col) {

    if (this.state.winner) {
      return;
    } else if (this.state.board[row][col] !== '') {
      return;
    } else {

      // increment turns
      this.setState({turns: this.state.turns + 1});

      // update the board
      let newBoard = this.state.board;
      newBoard[row][col] = this._getCurrentPlayer(this.state);
      this.setState({board: newBoard});

      // check winner
      let winner = this._checkWinner(this.state.board);
      this.setState({winner: winner});

    }
  }

  _resetBoard() {
    this.setState(this._getInitialState());
  }

  _getCurrentPlayer(state) {
    return state.turns % 2 === 0 ? 'O' : 'X';
  }

  _getInitialState() {
    return {
      board: [['', '', ''],
             ['', '', ''],
             ['', '', '']],
      turns: 1,
      winner: ''
    }
  }

  render() {

    let rows = this.state.board.map((rowContent, id) => (
      <Row
        key={id}
        id={id}
        rowContent={rowContent}
        onClick={this._handleClick.bind(this)}
      />
    ));

    let message = this._getMessage(this.state);

    return (
      <div>
        <button onClick={this._resetBoard.bind(this)} className="reset">
          RESET
        </button>
        <div className="message">
          {message}
        </div>
        <div className="board">
          {rows}
        </div>
      </div>
    );
  }
}
