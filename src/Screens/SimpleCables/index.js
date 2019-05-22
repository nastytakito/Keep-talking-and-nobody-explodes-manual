import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import I18nText from '../../Utils/I18nText'
import i18n from 'i18n-js'
import WireSvg from '../../Assets/Images/WireComponent.svg'
import InstructionsList from '../../Common/InstructionsList'
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
      <ScrollView contentContainerStyle={styles.container} >
          <I18nText
            containerStyle={styles.header}
            style={styles.sectionTitleText} t={'title'} />
          <I18nText
            containerStyle={styles.header}
            style={styles.sectionSubtitleText} t={'subtitle'} />
        <View style={styles.content}>
          <InstructionsList />
          <View style={styles.svgContainer}>
            <WireSvg width={'80%'} height={'80%'}/>
            <Text>Ejemplo de Módulo de cables</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
  },
  content:{
    flex:1,
    paddingTop: 13,
  },
  header:{
    justifyContent: 'center',
  },
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
    fontStyle: 'italic'
  },
  svgContainer:{
    padding: 5,
    alignItems: 'center'
  },
  sectionDescriptionContainer:{
    margin: 5
  },
  sectionDescriptionText: {
    ...this.text,
    fontSize: 16,
  }
});

export default SimpleCables