import React from 'react'
import {StyleSheet, View} from "react-native";
import I18nText from "../../../Utils/I18nText";

const ModulesInformation = ()=>{
  return (
    <View style={styles.modulesContainer}>
      <I18nText style={styles.sectionTitleText} t={'modules.title'} />
      <I18nText style={styles.sectionDescriptionText} t={'modules.description'} />
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
    ...this.text,
    fontSize: 18,
  },
  modulesContainer: {
    flex:1,
    marginVertical: 20
  }
});


export default ModulesInformation