import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Flex } from '../dist-components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class FlexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Flex style={{ backgroundColor: 'green' }} direction="row">
          <Flex.Item>
            <Text>label</Text>
          </Flex.Item>
          <Text>value</Text>
        </Flex>
      </View>
    );
  }
}
