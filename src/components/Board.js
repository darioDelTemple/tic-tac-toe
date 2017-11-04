import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: [['', '', ''],
             ['', '', ''],
             ['', '', '']]
    }
  };


  _handleClick(row, col) {
    console.log(`row=${row}, col=${col}`);
    let newBoard = this.state.board;
    newBoard[row][col] = 'X';
    this.setState({board: newBoard});
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
