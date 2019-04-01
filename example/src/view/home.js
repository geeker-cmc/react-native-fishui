import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    height: 72,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    color: '#929292',
    marginLeft: 24,
  },
  typeContainer: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    borderTopColor: '#e4e4e4',
    borderTopWidth: 1,
  },
  itemContainer: {
    marginLeft: 24,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 70,
  },
  btnText: {
    color: '#000000',
    fontSize: 22,
  },
});

const ComponentItem = ({ last, text, navigation }) => (
  <TouchableOpacity
    style={[styles.itemContainer, last && { borderBottomWidth: 0 }]}
    onPress={() => navigation.push(text)}
  >
    <Text style={styles.btnText}>{text}</Text>
  </TouchableOpacity>
);
ComponentItem.defaultProps = {
  last: false,
};
ComponentItem.propTypes = {
  last: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderBtn = (options) => {
    const { text, last = false } = options;
    const { navigation } = this.props;
    return <ComponentItem last={last} text={text} navigation={navigation} />;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>基础组件</Text>
        </View>
        <View style={styles.typeContainer}>
          {this.renderBtn({ text: 'Button' })}
          {this.renderBtn({ text: 'Icon', last: true })}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>布局组件</Text>
        </View>
        <View style={styles.typeContainer}>
          {this.renderBtn({ text: 'Flex' })}
        </View>
      </ScrollView>
    );
  }
}
