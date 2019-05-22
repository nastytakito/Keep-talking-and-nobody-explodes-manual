import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import I18nText from '../../../Utils/I18nText'
import i18n from "i18n-js";
import InstructionsList from '../../../Common/InstructionsList';

const Cables = ()=>{
  return (
    <View style={{flex:1}}>
      <View style={{padding: 20}}>
        <I18nText style={styles.sectionTitleText} t={'title'} />
      </View>
      <View style={{justifyContent: 'center'}}>
        <InstructionsList textStyle={styles.sectionDescriptionText} containerStyle={styles.container}/>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  text: {
    textAlign: 'justify',
  },
  container: {
    borderTopWidth: 1
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

export default Cables