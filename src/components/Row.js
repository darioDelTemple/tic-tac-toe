import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

export default class Row extends React.PureComponent {

  static propTypes = {
    rowContent: PropTypes.arrayOf(PropTypes.string)
  }

  render() {

    let {
      rowContent
    } = this.props;

    let squares = rowContent.map((content) => (
      <Square
        content={content}
      />
    ));

    return (
      <div
        className="row"
      >
        {squares}
      </div>
    );
  }
}
