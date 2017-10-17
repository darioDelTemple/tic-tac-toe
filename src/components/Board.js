import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

export default class Board extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      board: [['', '', ''],
              ['', '', ''],
              ['', '', '']]
    }
  }

  static propTypes = {
    onClick: PropTypes.func,
    rows: PropTypes.arrayOf(PropTypes.shape({}))
  }

  _handleClick(e) {
    console.log(e.target)
    console.log('board')
  }

  render() {

    let {
      rows
    } = this.props;

    let rows = rows.map((row) => (
      <Row
        key={row.id}
        id={row.id}
        content={row.content}
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
