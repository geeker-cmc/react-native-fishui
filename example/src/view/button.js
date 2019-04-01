import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from '../dist-components';
// import { ThemeProvider } from '../../component/style';

export default class ButtonView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Button>
           我是按钮
        </Button>
      </View>
    );
  }
}
