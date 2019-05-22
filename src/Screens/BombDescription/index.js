import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import I18nText from '../../Utils/I18nText'
import i18n from 'i18n-js'

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

class BombDescription extends Component {

  static navigationOptions = ({navigation})=>({
    title: i18n.t('BombDescription'),
    headerStyle: {
      backgroundColor: COLOR.dark.background,
    },
    headerTintColor: COLOR.dark.text,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Intro</Text>
        <I18nText t={'sectionDescription'} />
        <I18nText style={styles.sectionTitleText} t={'modules.title'} />
        <I18nText style={styles.sectionDescriptionText} t={'modules.description'} />
        <I18nText style={styles.sectionTitleText} t={'strikes.title'} />
        <I18nText style={styles.sectionDescriptionText} t={'strikes.description'} />
        <I18nText style={styles.sectionTitleText} t={'gatherInformation.title'} />
        <I18nText style={styles.sectionDescriptionText} t={'gatherInformation.description'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'justify'
  },
  sectionTitleText:{
    ...this.text,
    fontSize: 26,
    fontWeight: 'bold'
  },
  sectionDescriptionText: {
    ...this.text,
    fontSize: 18,
  }
});

export default BombDescription