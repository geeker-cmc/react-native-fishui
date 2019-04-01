import React, { Component } from 'react';
import {
  View, ViewPropTypes,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      flex, style, children, ...restProps
    } = this.props;
    const flexStyle = {
      flex,
    };
    const inner = (
      <View style={[flexStyle, style]} {...restProps}>
        {children}
      </View>
    );
    const isTouchableComponent = restProps.onPress
    || restProps.onPressIn
    || restProps.onPressOut
    || restProps.onLongPress;
    if (isTouchableComponent) {
      return <TouchableWithoutFeedback {...restProps}>{inner}</TouchableWithoutFeedback>;
    }
    return inner;
  }
}

Item.propTypes = {
  flex: PropTypes.number,
  style: ViewPropTypes.style,
};

Item.defaultProps = {
  flex: 1,
  style: null,
};
