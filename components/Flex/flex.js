import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';


export default class Flex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      justify, align, self, direction, wrap, children, style, ...restProps
    } = this.props;
    const transfer = [justify, align, self];
    const transferPropertyes = transfer.map((property) => {
      let transferedProperty;
      switch (property) {
        case 'start':
        case 'end':
          transferedProperty = `flex-${property}`;
          break;
        case 'between':
        case 'around':
        case 'evenly':
          transferedProperty = `space-${property}`;
          break;
        default:
          transferedProperty = property;
          break;
      }
      return transferedProperty;
    });


    const flexStyle = {
      justifyContent: transferPropertyes[0],
      alignItems: transferPropertyes[1],
      alignSelf: transferPropertyes[2],
      flexDirection: direction,
      flexWrap: wrap,
    };


    const inner = (
      <View style={[flexStyle, style]} {...restProps}>
        {children}
      </View>
    );
    const isTouchabledComponent = restProps.onPress
    || restProps.onPressIn
    || restProps.onPressOut
    || restProps.onLongPress;
    if (isTouchabledComponent) {
      return (
        <TouchableWithoutFeedback {...restProps}>
          {inner}
        </TouchableWithoutFeedback>
      );
    }
    console.log('lili');
    // return <View style={{ backgroundColor: 'red', width: 100, height: 100}}></View>;
    return inner;
  }
}

Flex.propTypes = {
  justify: PropTypes.string,
  align: PropTypes.string,
  self: PropTypes.string,
  direction: PropTypes.string,
  wrap: PropTypes.string,
  style: ViewPropTypes.style,
};

Flex.defaultProps = {
  justify: 'start',
  align: 'center',
  self: 'stretch',
  direction: 'column',
  wrap: 'nowrap',
  style: null,
};
