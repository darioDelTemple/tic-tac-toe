import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

export default class Board extends React.PureComponent {

  static propTypes = {
    boardContent: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  }

  _handleClick(row, col) {
    console.log(`row=${row}, col=${col}`);
  }

  render() {

    let {
      boardContent
    } = this.props;

    let rows = boardContent.map((rowContent, id) => (
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
