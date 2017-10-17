import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

export default class Board extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      board: [['X', 'O', ''],
              ['', '', ''],
              ['', '', '']]
    }
  }

  static propTypes = {
    onClick: PropTypes.func,
    content: PropTypes.string
  }

  _handleClick(e) {
    console.log('board')
  }

  render() {

    return (
      <div className="board">
        <div className="row">
          <Square
            onClick={this._handleClick}
            content={this.state.board[0][0]}
          />
          <Square
            onClick={this._handleClick}
            content={this.state.board[0][1]}
          />
          <Square
            onClick={this._handleClick}
            content={this.state.board[0][2]}
          />
        </div>
        <div className="row">
          <Square
            onClick={this._handleClick}
            content={this.state.board[1][0]}
          />
          <Square
            onClick={this._handleClick}
            content={this.state.board[1][1]}
          />
          <Square
            onClick={this._handleClick}
            content={this.state.board[1][2]}
          />
        </div>
        <div className="row">
          <Square
            onClick={this._handleClick}
            content={this.state.board[2][0]}
          />
          <Square
            onClick={this._handleClick}
            content={this.state.board[2][1]}
          />
          <Square
            onClick={this._handleClick}
            content={this.state.board[2][2]}
          />
        </div>
      </div>
    );
  }
}
