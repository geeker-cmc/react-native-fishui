import React, { Component } from 'react';
import {
  ScrollView, View, Text, Platform,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    const childrenLength = React.Children.count(props.children) || 1;
    this.state = {
      size: {
        width: 0,
        height: 0,
      },
      currentPage: props.currentPage,
      childrenLength,
    };
    this.offset = 0;
    this.nextPage = 0;
  }

  componentDidMount() {
    const { childrenLength } = this.state;
    const { autoPlay } = this.props;
    if (childrenLength && autoPlay) {
      this.setUpTimer();
    }
  }

  scrollTo = ({ offset, animated, nofix }) => {
    if (this.scrollView) {
      this.scrollView.scrollTo({ y: 0, x: offset, animated });
      if (!nofix && Platform.OS === 'android' && !animated) {
        this.scrollView.scrollTo({ y: 0, x: offset, animated: true });
      }
    }
  }

  placePositon = (page) => {
    const { isLooped } = this.props;
    const { size: { width }, childrenLength } = this.state;
    let offset = 0;
    if (page < childrenLength) {
      if (page === 0 && isLooped) {
        offset = width * childrenLength;
      } else {
        offset = width * page;
      }
    }
    this.scrollTo({ offset, animated: false });
  }

  onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    const { currentPage } = this.state;
    this.setState({
      size: {
        width,
        height,
      },
    });

    setTimeout(() => this.placePositon(currentPage), 0);
  }

  normalizePageNumber = (page) => {
    const { childrenLength } = this.state;
    if (page === childrenLength) {
      return 0;
    }
    if (page > childrenLength) {
      return 1;
    }
    if (page < 0) {
      return childrenLength - 1;
    }
    return page;
  }

  calculateCurrentPage = (offset) => {
    const { size: { width } } = this.state;
    const page = Math.round(offset / width);
    return this.normalizePageNumber(page);
  }

  onScrollBegin = () => {
    this.clearTimer();
  }

  setCurrentPage = (currentPage) => {
    const { onAnimateNextPage } = this.props;
    this.setState({ currentPage }, () => {
      if (onAnimateNextPage) {
        onAnimateNextPage(currentPage);
      }
    });
  }

  animateToPage = (page) => {
    const { size: { width }, childrenLength } = this.state;
    const { isLooped } = this.props;
    const nextPage = this.normalizePageNumber(page);
    this.clearTimer();
    if (nextPage === 0) {
      if (isLooped) {
        this.scrollTo({ offset: childrenLength * width, animated: true });
      } else {
        this.scrollTo({ offset: 0, animated: true });
      }
    } else if (nextPage === 1) {
      this.scrollTo({ offset: 0, animated: true });
    } else {
      this.scrollTo({ offset: width * nextPage, animated: true });
    }
    this.setCurrentPage(nextPage);
    this.setUpTimer();
  }

  animateNextPage = () => {
    const { currentPage } = this.state;
    const { isLooped } = this.props;
    const nextPage = this.normalizePageNumber(currentPage + 1);
    if (!isLooped && nextPage < currentPage) {
      return;
    }
    this.animateToPage(nextPage);
  }

  clearTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  setUpTimer = () => {
    const { autoPlay, delay } = this.props;
    const { childrenLength } = this.props;
    if (autoPlay && childrenLength > 1) {
      this.clearTimer();
      this.timer = setTimeout(this.animateNextPage, delay);
    }
  }

  onScrollEnd = (event) => {
    const offset = { ...event.nativeEvent.contentOffset };
    const page = this.calculateCurrentPage(offset.x);
    this.placePositon(page);
    this.setCurrentPage(page);
    this.setUpTimer();
  }

  renderContent = () => {
    const { children, isLooped } = this.props;
    const { size } = this.state;
    const childrenArray = React.Children.toArray(children);
    const pages = [];
    if (childrenArray && childrenArray.length > 1) {
      pages.push(...childrenArray);
      if (isLooped) {
        pages.push(childrenArray[0]);
        pages.push(childrenArray[1]);
      }
    } else if (children) {
      pages.push(childrenArray[0]);
    } else {
      pages.pu(<View><Text>no children</Text></View>);
    }
    return pages.map((page, i) => (
      <View style={[{ ...size }]} key={`page${i}`}>
        {page}
      </View>
    ));
  }

  render() {
    const { style, isLooped } = this.props;
    const { size, childrenLength } = this.state;
    return (
      <View onLayout={this.onLayout} style={style}>
        <ScrollView
          // eslint-disable-next-line no-return-assign
          ref={scrollView => this.scrollView = scrollView}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentInset={{ top: 0 }}
          horizontal
          pagingEnabled
          onScrollBeginDrag={this.onScrollBegin}
          onScrollAnimationEnd={this.onScrollEnd}
          onScroll={this.onScroll}
          contentContainerStyle={[
            {
              width: size.width * (childrenLength + (childrenLength > 1 && isLooped ? 2 : 0)),
              height: size.height,
            },
          ]}
        >
          {
          this.renderContent()
        }
        </ScrollView>
      </View>
    );
  }
}

Carousel.defaultProps = {
  currentPage: 0,
};

Carousel.propTypes = {
  currentPage: PropTypes.number,
};
