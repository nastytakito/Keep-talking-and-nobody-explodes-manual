import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import i18n from 'i18n-js'
import I18nText from '../../Common/I18nText'
import InstructionsList from '../../Common/InstructionsList'
import ButtonComponent from '../../Assets/Images/ButtonComponent.svg'
import Band from './Components/Band'
class Button extends Component {
  static navigationOptions = ({navigation})=>({
    title: i18n.t('Button')
  });

  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.content}>
            <I18nText style={styles.title} t={'title'}/>
            <I18nText style={styles.subtitle} t={'subtitle'}/>

            <View style={styles.svgContainer}>
              <ButtonComponent style={styles.buttonComponent}/>
            </View>

            <View style={styles.sectionDescriptionContainer}>
              <I18nText style={styles.sectionDescriptionText} t={'instructionsDescription'}/>
              <InstructionsList containerStyle={styles.instructionsStyle}/>
            </View>

            <View style={styles.appendixContainer}>
              <I18nText style={styles.sectionDescriptionText} t={'appendix.a.description'}/>
              <I18nText style={styles.sectionDescriptionText} t={'appendix.b.description'}/>
            </View>

            <View style={styles.subContainer}>
              <I18nText style={styles.title} t={'subSection.title'}/>
              <I18nText style={styles.sectionDescriptionText} t={'subSection.subtitle'}/>
              <Band bandColor={'blue'}/>
              <Band bandColor={'white'}/>
              <Band bandColor={'yellow'}/>
              <Band bandColor={'other'}/>
            </View>
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
  title:{
    fontSize: 26,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 12,
    fontStyle: 'italic'
  },
  sectionDescriptionContainer:{
    marginVertical: 15
  },
  sectionDescriptionText: {
    fontSize: 16,
  },
  buttonComponent: {
    padding: 60
  },
  appendixContainer: {
    padding: 10,
    margin: 15
  },
  subContainer: {

  },
  svgContainer: {
    marginVertical: 20,
  },
  instructionsStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10

  }
});

export default Button