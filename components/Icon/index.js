import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getIconType from '../helpers/getIconType';

export default class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      type, name, size, color,
    } = this.props;
    const IconComponent = getIconType(type);
    return (
      <IconComponent size={size} name={name} color={color} />
    );
  }
}

Icon.defaultProps = {
  type: '',
  size: 16,
  color: '#dddddd',
  name: ' ',
};

Icon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  name: PropTypes.string,
};
