import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import I18nText from '../../../Utils/I18nText'
import i18n from "i18n-js";

const Cables = ({navigation})=>{
  const instructionList = i18n.t(`screens.${navigation.state.routeName}.instructionsList`);
  console.log(typeof instructionList);
  return (
    <View>
      <I18nText style={styles.sectionSubtitleText} t={'title'} />
      {
        typeof instructionList === 'string' ?
          null
          :
          instructionList.map((instruction,index)=>(
          <Text key={index} style={styles.sectionDescriptionText}> - {instruction}</Text>
        ))
      }
    </View>
  )
};


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

export default Cables