import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

export default class Row extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number,
    rowContent: PropTypes.arrayOf(PropTypes.string)
  }

  _handleClick(id) {
    // e.stopPropagation();
    // console.log(e.target.id);
    let row = this.props.id;
    let col = id;
    this.props.onClick(row, col);
  }

  render() {

    let {
      id,
      rowContent
    } = this.props;

    let squares = rowContent.map((content, id) => (
      <Square
        key={id}
        id={id}
        content={content}
        onClick={this._handleClick.bind(this)}
      />
    ));

    return (
      <div
        id={id}
        className="row"
      >
        {squares}
      </div>
    );
  }
}
