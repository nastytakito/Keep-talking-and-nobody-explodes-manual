import React, { Component } from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

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


class Dashboard extends Component{

  static navigationOptions = {
    title: 'Perrito',
    headerStyle: {
      backgroundColor: COLOR.dark.background,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props){
    super(props);
    this.handleEnglishPress = this.handleEnglishPress.bind(this);
    this.handleSpanishPress = this.handleSpanishPress.bind(this);
  }

  handleEnglishPress(){
    this.props.navigation.navigate('Intro',JSON.stringify({language: 'en_us'}))
  }

  handleSpanishPress(){
    this.props.navigation.navigate('Intro',JSON.stringify({language: 'es_mx'}))
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.languageLabels}>
            <Text style={styles.labelText}>Select a language:</Text>
            <Text style={styles.labelText}>Seleccione un lenguaje:</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button title={'English'} onPress={this.handleEnglishPress} color={COLOR.dark.button.default}/>
            </View>
            <View style={styles.button}>
              < Button title={'Español'} onPress={this.handleSpanishPress} color={COLOR.dark.button.primary}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.dark.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  languageLabels: {
  },
  labelText: {
    fontSize: 32,
    textAlign: 'center',
    color: COLOR.dark.text
  },
  buttonsContainer: {
    alignContent: 'center',
  },
  button: {
    padding: 10
  }
});

export default Dashboard