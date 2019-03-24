import { createStackNavigator, createAppContainer } from 'react-navigation';
import ButtonView from '../view/button';


const AppNavigator = createStackNavigator({
  Button: {
    screen: ButtonView,
  },
}, {
  headerMode: 'none',
});


export default createAppContainer(AppNavigator);
