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

class SimpleCables extends Component {

  static navigationOptions = ({navigation})=>({
    title: i18n.t('SimpleCables'),
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
        <I18nText style={styles.sectionTitleText} t={'title'} />
        <I18nText style={styles.sectionSubtitleText} t={'subtitle'} />
        {
          i18n.t('screens.SimpleCables.instructionsList').map((instruction,index)=>(
              <Text key={index} style={styles.sectionDescriptionText}> - {instruction}</Text>
          ))
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'justify',
  },
  sectionTitleText:{
    ...this.text,
    fontSize: 26,
    fontWeight: 'bold'
  },
  sectionSubtitleText: {
    ...this.text,
    fontSize: 12,
  },
  sectionDescriptionText: {
    ...this.text,
    fontSize: 18,
  }
});

export default SimpleCables