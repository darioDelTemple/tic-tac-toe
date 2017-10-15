import React from 'react';
import Square from './Square';

export default class Board extends React.PureComponent {

  render() {

    return (
      <div className="board">
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}
