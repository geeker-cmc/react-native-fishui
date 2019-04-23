import React, { Component } from 'react';
import {
  View, Text, Dimensions,
} from 'react-native';
import { Carousel } from '../dist-components';

const { width } = Dimensions.get('window');

export default class CarouselView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Carousel style={{ width, height: 100 }} isLooped autoPlay delay={3000}>
          <View style={{ backgroundColor: 'red', width, height: 100 }}>
            <Text>1</Text>
          </View>
          <View style={{ backgroundColor: 'green', width, height: 100 }}>
            <Text>2</Text>
          </View>
          <View style={{ backgroundColor: 'blue', width, height: 100 }}>
            <Text>3</Text>
          </View>
        </Carousel>
      </View>
    );
  }
}
