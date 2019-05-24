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
  Button,
  Keypad,
  SimonSays
} from '../Screens'
import Cables from "../Screens/SimpleCables/Components/Cables";


const SimpleCablesTabNavigation = createBottomTabNavigator({
  SimpleCables:{
    screen: SimpleCables
  },
  SimpleCables3: {
    screen: Cables,
    navigationOptions: {
      title: '3 Cables'
    }
  },
  SimpleCables4: {
    screen: Cables,
    navigationOptions: {
      title: '4 Cables'
    }
  },
  SimpleCables5:{
    screen: Cables,
    navigationOptions: {
      title: '5 Cables'
    }
  },
  SimpleCables6:{
    screen: Cables,
    navigationOptions: {
      title: '6 Cables'
    }
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
  },
  Keypad: {
    screen: Keypad
  },
  SimonSays: {
    screen: SimonSays
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