import React, { PureComponent } from 'react';
import {
  View, Text, TouchableHighlight, ActivityIndicator,
  StyleSheet,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { WithTheme } from '../style';
import buttonStyles from './style';

export default class Button extends PureComponent {
  static displayName = 'Button';

  constructor(props) {
    super(props);
    this.state = {
      touchIn: false,
      pressIn: false,
    };
  }

  onPressIn = (...arg) => {
    const { onPressIn } = this.props;
    this.setState({
      pressIn: true,
    });
    if (onPressIn) {
      onPressIn(...arg);
    }
  }

  onPressOut = (...arg) => {
    const { onPressOut } = this.props;
    this.setState({
      pressIn: false,
    });
    if (onPressOut) {
      onPressOut(...arg);
    }
  }

  onShowUnderlay = (...arg) => {
    const { onShowUnderlay } = this.props;
    this.setState({
      touchIn: true,
    });
    if (onShowUnderlay) {
      onShowUnderlay(...arg);
    }
  }

  onHideUnderlay = (...arg) => {
    const { onHideUnderlay } = this.props;
    this.setState({
      touchIn: false,
    });
    if (onHideUnderlay) {
      onHideUnderlay(...arg);
    }
  }

  onPress = (...arg) => {
    const { onPress } = this.props;
    if (onPress) {
      onPress(...arg);
    }
  }


  render() {
    const {
      styles,
      children,
      type,
      size,
      loading,
      disabled,
      activeStyle,
      style,
    } = this.props;
    const { pressIn, touchIn } = this.state;
    return (
      <WithTheme themeStyles={buttonStyles} styles={styles}>
        {
          (_styles) => {
            const wrapperStyle = [
              _styles.wrapperStyle,
              _styles[`${size}Raw`],
              _styles[`${type}Raw`],
              disabled && _styles[`${type}DisabledRaw`],
              pressIn && activeStyle && _styles[`${type}Highlight`],
              activeStyle && touchIn && activeStyle,
              style,
            ];

            const textStyle = [
              _styles[`${type}RawText`],
              _styles[`${size}RawText`],
              disabled && _styles[`${type}DisabledRawText`],
              pressIn && _styles[`${type}HighlightText`],
            ];

            const underlayColor = (StyleSheet.flatten(
              activeStyle || _styles[`${type}Highlight`],
            )).backgroundColor;

            const indicatorColor = (StyleSheet.flatten(
              pressIn ? _styles[`${type}HighlightText`] : _styles[`${type}RawText`],
            )).color;
            return (
              <TouchableHighlight
                style={wrapperStyle}
                disabled={disabled}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                underlayColor={underlayColor}
                onShowUnderlay={this.onShowUnderlay}
                onHideUnderlay={this.onHideUnderlay}
                onPress={this.onPress}
              >
                <View style={_styles.container}>
                  {
                    loading ? (
                      <ActivityIndicator
                        style={_styles.indicator}
                        animating
                        color={indicatorColor}
                      />
                    ) : null
                  }
                  <Text style={textStyle}>{children}</Text>
                </View>
              </TouchableHighlight>
            );
          }
        }
      </WithTheme>
    );
  }
}

Button.defaultProps = {
  type: 'primary',
  children: '',
  disabled: false,
  size: 'large',
  onPressIn: null,
  activeStyle: null,
  onPress: null,
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'small']),
  onPressIn: PropTypes.func,
  activeStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
};
