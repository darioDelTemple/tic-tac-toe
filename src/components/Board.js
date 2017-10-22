import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

export default class Board extends React.PureComponent {

  static propTypes = {
    boardContent: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  }

  render() {

    let {
      boardContent
    } = this.props;

    let rows = boardContent.map((rowContent) => (
      <Row
        // key={row.id}
        // id={row.id}
        rowContent={rowContent}
      />
    ));

    return (
      <div className="board">
        {rows}
      </div>
    );
  }
}
