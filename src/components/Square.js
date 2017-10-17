import React from 'react';
import PropTypes from 'prop-types';

export default class Square extends React.PureComponent {

  static propTypes = {
    onClick: PropTypes.func,
    content: PropTypes.string
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
      content
    } = this.props;

    return (
      <div className="square" onClick={this._handleClick.bind(this)}>
        {content}
      </div>
    );
  }
}
