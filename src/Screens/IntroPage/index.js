import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const COLOR = {
  light: {
    background: '#f9f9f9',
    text: '#080808',
    button: {
      default: '#cecece',
      primary: '#a1d1ee'
    }
  },
  dark: {
    background: '#1b1b1b',
    text: '#e8e8e8',
    button: {
      default: '#2d2d2d',
      primary: '#0a4854'
    }
  }
};

class IntroPage extends Component {

  static navigationOptions = {
    title: 'PErro',
    headerStyle: {
      backgroundColor: COLOR.dark.background,
    },
    headerTintColor: COLOR.dark.text,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      language: props.navigation.getParam('language', 'es_mx')
    }
  }

  render() {
    return (
      <View>
        <Text>Intro</Text>
        <Text>{this.state.language}</Text>
      </View>
    )
  }

}

export default IntroPage