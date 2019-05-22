import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStackNavigation from './src/ReactNavigation';
import i18n from 'i18n-js'
import en from './src/Locale/en'
import es from './src/Locale/es'
import DeviceStorage from "./src/Utils/DeviceStorage";


export default class App extends Component {

  constructor(p){
    super(p);
    i18n.fallback = true;
    i18n.translations = { en, es };
    this.state = {
      localeReady: false
    }
  }

  async componentDidMount() {
    i18n.locale = await DeviceStorage.getItem('selectedLanguage');
    this.setState({localeReady: true})
  }

  render() {
    return (
      this.state.localeReady ?
        <RootStackNavigation />
        :
        null
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
