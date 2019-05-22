import React, {Component} from 'react'
import {View, Text} from 'react-native'
import i18n from 'i18n-js'

class Button extends Component {
  static navigationOptions = {
    title: i18n.t('Button'),
  };

  t(key){
    return i18n.t(`screens.${this.props.navigation.state.routeName}.${key}`)
  }

  render(){
    return(
      <View>
        <Text>Boton</Text>
        <Text>{this.t('title')}</Text>
        <Text>{this.t('subtitle')}</Text>
        <Text>{this.t('appendix.a.description')}</Text>
        <Text>{this.t('appendix.b.description')}</Text>
        <Text>{this.t('instructionsDescription')}</Text>
      </View>
    )
  }
}

export default Button