import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { WithTheme } from '../style';
import checkboxItemStyle from './style/checkbox-item';


export default class CheckboxItem extends Component {
  static displayName = 'CheckboxItem';

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handlePress = () => {

  }

  render() {
    const { styles, hasLine } = this.props;
    return (
      <WithTheme themeStyle={checkboxItemStyle} styles={styles}>
        {
            _styles => (
              <View style={[_styles.container, hasLine ? _styles.hasLine : {}]}>
                <TouchableOpacity onPress={this.handlePress}>
                  <View style={[_styles.touchContainer]} />
                </TouchableOpacity>
              </View>
            )
        }
      </WithTheme>
    );
  }
}

CheckboxItem.defaultProps = {
  label: '选项',
  trueValue: null,
  disabled: false,
  checked: false,
  hasLine: false,
  iconPosition: 'left',
};
