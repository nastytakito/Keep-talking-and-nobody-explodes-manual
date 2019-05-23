import React from 'react'
import {View, StyleSheet} from 'react-native'
import I18nText from '../../../Common/I18nText'
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
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
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