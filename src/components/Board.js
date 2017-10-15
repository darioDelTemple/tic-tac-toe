import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

export default class Board extends React.PureComponent {

  static propTypes = {
    onClick: PropTypes.func
  }

  _handleClick(e) {
    console.log('board')
  }

  render() {

    return (
      <div className="board">
        <div className="row">
          <Square onClick={this._handleClick} />
          <Square onClick={this._handleClick} />
          <Square onClick={this._handleClick} />
        </div>
        <div className="row">
          <Square onClick={this._handleClick} />
          <Square onClick={this._handleClick} />
          <Square onClick={this._handleClick} />
        </div>
        <div className="row">
          <Square onClick={this._handleClick} />
          <Square onClick={this._handleClick} />
          <Square onClick={this._handleClick} />
        </div>
      </div>
    );
  }
}
