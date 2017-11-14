import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: [['', '', ''],
             ['', '', ''],
             ['', '', '']],
      turns: 0,
      winner: ''
    }
  };

  _checkRow(board, row) {
    let first = board[row][0];

    if (first == '') {
      return;
    } else {
      for (let col = 1; col < board[row].length; col++) {
        if (first != board[row][col]) {
          return;
        }
      }
    }

    return first;
  }

  _checkColumn(board, column) {
    let first = board[0][column];

    if (first == '') {
      return;
    } else {
      for (let row = 1; row < board[column].length; row++) {
        if (first != board[row][column]) {
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

    if (first == '') {
      return;
    } else {
      for (let i = 1; i < board.length; i++) {
        if (first != board[i][i]) {
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


    if (first == '') {
      return;
    } else {
      for (let k = 1; k < board.length; k++) {
        if (first != board[row + k][col - k]) {
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


  _handleClick(row, col) {

    if (this.state.winner) {
      console.log(`WINNER: ${this.state.winner}`);
    } else if (this.state.board[row][col] != '') {
      console.log('Turn already taken here!')
    } else {
      // check whos turn it is
      let currentPlayer;
      if (this.state.turns % 2 === 0) {
        currentPlayer = 'X';
      } else {
        currentPlayer = 'O';
      }

      // update the board
      let newBoard = this.state.board;
      newBoard[row][col] = currentPlayer;
      this.setState({board: newBoard});

      // increment turns
      this.setState({turns: this.state.turns + 1});

      if (this.state.turns == 8) {
        console.log('TIE!');
      } else {
        // check winner
        let winner = this._checkWinner(this.state.board);
        this.setState({winner: winner});
        console.log(winner);
      }
    }
  }

  render() {

    let rows = this.state.board.map((rowContent, id) => (
      <Row
        // key={row.id}
        id={id}
        rowContent={rowContent}
        onClick={this._handleClick.bind(this)}
      />
    ));

    return (
      <div className="board">
        {rows}
      </div>
    );
  }
}
