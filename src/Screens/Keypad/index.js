import React, {Component} from 'react'
import {View, Text} from 'react-native'
import i18n from 'i18n-js'

class Keypad extends Component {
  static navigationOptions = {
    title: i18n.t('Button'),
  };

  t(key){
    return i18n.t(`screens.${this.props.navigation.state.routeName}.${key}`)
  }

  render(){
    return(
      <View>
        <Text>Keypad</Text>
        <Text>{this.t('title')}</Text>
        <Text>{this.t('subtitle')}</Text>
        <Text>{this.t('instructionsList')}</Text>
      </View>
    )
  }
}

export default Keypad