import React from 'react'
import {StyleSheet, View} from "react-native";
import I18nText from "../../../Common/I18nText";
import TimeComponent from '../../../Assets/Images/TimerComponent.svg'

const StrikesInformation = ()=>{
  return (
    <View style={styles.modulesContainer}>
      <I18nText style={styles.sectionTitleText} t={'strikes.title'} />
      <I18nText style={styles.sectionDescriptionText} t={'strikes.description'} />
      <View style={styles.strikeIndicatorContainer}>
        <I18nText style={styles.strikeIndicatorText} t={'strikes.strikeIndicator'} />
        <TimeComponent  style={styles.strikeIndicatorSvg}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  sectionTitleText:{
    textAlign: 'justify',
    fontSize: 26,
    fontWeight: 'bold'
  },
  sectionDescriptionText: {
    textAlign: 'justify',
    fontSize: 18,
  },
  modulesContainer: {
    flex:1,
    marginVertical: 20
  },
  strikeIndicatorSvg:{
    padding: 80,
    marginBottom: 20,
    justifyContent: 'center'
  },
  strikeIndicatorContainer: {
    paddingTop: 20
  },
  strikeIndicatorText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  }
});


export default StrikesInformation