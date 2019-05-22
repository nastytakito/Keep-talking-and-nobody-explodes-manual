import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import {
  LanguageSelection,
  IntroScreen,
  SimpleCables,
  BombDescription,
  Button
} from '../Screens'
import Cables from "../Screens/SimpleCables/Components/Cables";


const SimpleCablesTabNavigation = createBottomTabNavigator({
  SimpleCables:{
    screen: SimpleCables
  },
  SimpleCables3: {
    screen: Cables,
  },
  SimpleCables4: {
    screen: Cables,
  },
  SimpleCables5:{
    screen: Cables,
  },
  SimpleCables6:{
    screen: Cables,
  }
});

const DrawerNavigation = createDrawerNavigator({
  BombDescription: {
    screen: BombDescription
  },
  SimpleCables: {
    screen: SimpleCablesTabNavigation
  },
  Button: {
    screen: Button
  }
});

const StackNavigation = createStackNavigator({
  IntroScreen: {
    screen: IntroScreen
  },
  Pages: {
    screen: DrawerNavigation
  }
});

const SwitchNavigation = createSwitchNavigator({
  Intro: {
    screen: StackNavigation
  },
  Language: {
    screen: LanguageSelection
  },
  initialRouterName: 'Intro'
});

export default createAppContainer(SwitchNavigation)