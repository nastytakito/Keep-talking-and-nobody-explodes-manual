import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import I18nText from '../../Common/I18nText'
import InstructionsList from '../../Common/InstructionsList'
import KeypadComponent from '../../Assets/Images/KeypadComponent.svg'
import i18n from 'i18n-js'
import KeysColumn from './Components/KeysColumn'
import {
  AE,
  AT,
  BALLOON,
  BT,
  COPYRIGHT,
  CURSIVE,
  DOUBLEK,
  DRAGON,
  EURO,
  FILLEDSTART,
  HOLLOWSTAR,
  HOOKN,
  LEFTC,
  MELTEDTHREE,
  NWHITHHAT,
  OMEGA,
  PARAGRAPH,
  PITCHFORK,
  PUMPKIN,
  QUESTIONMARK,
  RIGHTC,
  SIX,
  SMILEYFACE,
  SQUIDKNIFE,
  SQUIGGLYN,
  TRACKS,
  UPSIDEDOWNY
} from './Components/allKeysImages'

const keyImagesFileNames = [
  [BALLOON, AT, UPSIDEDOWNY, SQUIGGLYN, SQUIDKNIFE, HOOKN, LEFTC],
  [EURO, BALLOON, LEFTC, CURSIVE, HOLLOWSTAR, HOOKN, QUESTIONMARK],
  [COPYRIGHT, PUMPKIN, CURSIVE, DOUBLEK, MELTEDTHREE, UPSIDEDOWNY, HOLLOWSTAR],
  [SIX, PARAGRAPH, BT, SQUIDKNIFE, DOUBLEK, QUESTIONMARK, SMILEYFACE],
  [PITCHFORK, SMILEYFACE, BT, RIGHTC, PARAGRAPH, DRAGON, FILLEDSTART],
  [SIX, EURO, TRACKS, AE, PITCHFORK, NWHITHHAT, OMEGA]

];

class Keypad extends Component {
  static navigationOptions = ()=>({
    title: i18n.t('Keypad'),
  });

  render(){
    return(
      <ScrollView>

        <View style={styles.container}>
          <View style={styles.content}>
            <I18nText style={styles.title} t={'title'}/>
            <I18nText style={styles.subtitle} t={'subtitle'}/>
            <KeypadComponent style={styles.svgContainer}/>
            <InstructionsList/>

            <ScrollView horizontal>
              {
                keyImagesFileNames.map((keysArray, index) => {
                  return (
                    <View  key={index} style={styles.keysColumns}>
                      <KeysColumn keysArray={keysArray}/>
                    </View>
                  )
                })
              }
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  content: {
  },
  svgContainer: {
    padding: 70,
    marginVertical: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 12,
    fontStyle: 'italic'
  },
  keysColumns: {
    flexDirection: 'column',
    marginVertical: 30,
    marginHorizontal: 21
  }
});
export default Keypad