import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import I18nText from '../../Utils/I18nText'
import i18n from 'i18n-js'
import BombExample from "./Components/BombExample";
import ModulesInformation from "./Components/ModulesInformation";
import StrikesInformation from "./Components/StrikesInformation";
import GatherInformation from "./Components/GatherInformation";

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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.content}>
            <I18nText style={styles.title} t={'sectionTitle'} />
            <I18nText style={styles.subtitle} t={'sectionDescription'} />

            <BombExample />

            <ModulesInformation />

            <StrikesInformation />

            <GatherInformation />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  content: {
    margin: 10
  },
  title: {
    fontSize: 36,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'justify'
  },
});

export default BombDescription