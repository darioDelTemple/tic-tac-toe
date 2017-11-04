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
      turns: 0
    }
  };


  _handleClick(row, col) {
    // check if square has already been clicked
    if (this.state.board[row][col] != '') {
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
      this.setState({turns: this.state.turns + 1})
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
