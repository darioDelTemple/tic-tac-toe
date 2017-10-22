import React from 'react';
import PropTypes from 'prop-types';

export default class Square extends React.PureComponent {

  static propTypes = {
    content: PropTypes.string
  }

  render() {

    let {
      content
    } = this.props;

    return (
      <div className="square">
        {content}
      </div>
    );
  }
}
