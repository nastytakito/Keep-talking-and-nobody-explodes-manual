import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import i18n from 'i18n-js';

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

  static navigationOptions = ({navigation})=>({
    title: 'Intro Screen',
    headerStyle: {
    backgroundColor: COLOR.dark.background,
  },
    headerTintColor: COLOR.dark.text,
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Language')}
        title={'Config'}
        color={COLOR.dark.background}
      />
    )
  });

  t(translation){
    return i18n.t(`screens.${this.props.navigation.state.routeName}.${translation}`)
  }

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.t('welcome')}</Text>
        <Text>{this.t('welcome2')}</Text>
        <View>
          <Button title={this.t('button.start')} onPress={()=>{this.props.navigation.navigate('BombDescription')}}/>
        </View>
      </View>
    )
  }

}

export default IntroPage