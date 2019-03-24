import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.3}
      >
        <Text> nent </Text>
      </TouchableOpacity>
    );
  }
}
