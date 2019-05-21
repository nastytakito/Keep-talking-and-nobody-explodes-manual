import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import {
  Dashboard,
  IntroPage
} from '../Screens'

const StackNavigation = createStackNavigator({
  Index: {
    screen: IntroPage
  }
});


const DrawerNavigation = createDrawerNavigator({
  IntroPage: {
    screen: StackNavigation,
    title: 'Intro'
  },
});

const SwitchNavigation = createSwitchNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Intro: {
    screen: DrawerNavigation
  },
  initialRouterName: 'Dashboard'
});

export default createAppContainer(SwitchNavigation)