import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../view/home';
import ButtonView from '../view/button';
import IconView from '../view/icon';
import FlexPage from '../view/flex';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Button: {
    screen: ButtonView,
  },
  Icon: {
    screen: IconView,
  },
  Flex: {
    screen: FlexPage,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});


export default createAppContainer(AppNavigator);
