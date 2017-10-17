import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

export default class Row extends React.PureComponent {

  static propTypes = {
    row: PropTypes.arrayOf(PropTypes.shape({}))
  }

  _handleClick(e) {
    if (this.props.onClick) {
      e.stopPropagation();
      console.log('square')
      this.props.onClick(e);
    }
  }

  render() {

    let {
      rows,
      content
    } = this.props;

    let squares = row.map((square) => (
      <Square
        key={square.id}
        id={square.id}
        content={square.content}
        onClick={this._handleClick.bind(this)}
      />
    ));

    return (
      <div
        className="row"
        onClick={this._handleClick.bind(this)}
      >
        {squares}
      </div>
    );
  }
}
