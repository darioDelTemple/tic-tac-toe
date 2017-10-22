import React from 'react';
import PropTypes from 'prop-types';

export default class Square extends React.PureComponent {

  static propTypes = {
    id: PropTypes.integer,
    content: PropTypes.string,
    onClick: PropTypes.func
  }

  _handleClick(e) {
    // e.stopPropagation();
    this.props.onClick(e.target.id);
  }

  render() {

    let {
      id,
      content
    } = this.props;

    return (
      <div
        id={id}
        className="square"
        onClick={this._handleClick.bind(this)}
      >
        {content}
      </div>
    );
  }
}
