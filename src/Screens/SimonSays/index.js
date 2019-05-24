import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import i18n from 'i18n-js'
import I18nText from '../../Common/I18nText'
import InstructionsList from '../../Common/InstructionsList'
import SimonComponent from '../../Assets/Images/SimonComponent.svg'

class SimonSays extends Component {
  static navigationOptions = ({navigation})=>({
    title: i18n.t('SimonSays')
  });

  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.content}>
            <I18nText style={styles.title} t={'title'}/>
            <I18nText style={styles.subtitle} t={'subtitle'}/>

            <View style={styles.svgContainer}>
              <SimonComponent style={styles.simonComponent}/>
            </View>

            <View style={styles.sectionDescriptionContainer}>
              <InstructionsList containerStyle={styles.instructionsStyle} orderedList/>
            </View>

            <View style={styles.sectionDescriptionContainer}>
              <I18nText style={styles.sectionDescriptionText} t={'serialNumberVocal'}/>

              <ScrollView horizontal>
                <View style={styles.table}>
                  <View style={styles.tableHeader}>
                    <View style={styles.tableRow}>
                      <View style={styles.tableData} >
                        <I18nText t={'buttonToPress'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'blinking.red'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'blinking.blue'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'blinking.green'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'blinking.yellow'}/>
                      </View>
                    </View>
                  </View>
                  <View style={styles.tableBody}>
                    <View style={styles.tableRow}>
                      <View style={styles.tableData} >
                        <I18nText t={'strike.zero'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.blue'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.red'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.yellow'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.green'}/>
                      </View>
                    </View>
                    <View style={styles.tableRow}>
                      <View style={styles.tableData} >
                        <I18nText t={'strike.one'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.yellow'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.green'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.blue'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.red'}/>
                      </View>
                    </View>
                    <View style={styles.tableRow}>
                      <View style={styles.tableData}>
                        <I18nText t={'strike.two'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.green'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.red'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.yellow'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.blue'}/>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>

            <View style={styles.sectionDescriptionContainer}>
              <I18nText style={styles.sectionDescriptionText} t={'serialNumberNoVocal'}/>

              <ScrollView horizontal>
                <View style={styles.table}>
                  <View style={styles.tableHeader}>
                    <View style={styles.tableRow}>
                      <View style={styles.tableData} >
                        <I18nText t={'buttonToPress'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'blinking.red'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'blinking.blue'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'blinking.green'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'blinking.yellow'}/>
                      </View>
                    </View>
                  </View>
                  <View style={styles.tableBody}>
                    <View style={styles.tableRow}>
                      <View style={styles.tableData} >
                        <I18nText t={'strike.zero'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.blue'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.yellow'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.green'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.red'}/>
                      </View>
                    </View>
                    <View style={styles.tableRow}>
                      <View style={styles.tableData} >
                        <I18nText t={'strike.one'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.red'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.blue'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.yellow'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.green'}/>
                      </View>
                    </View>
                    <View style={styles.tableRow}>
                      <View style={styles.tableData}>
                        <I18nText t={'strike.two'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.yellow'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.green'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.blue'}/>
                      </View>
                      <View style={styles.tableData}>
                        <I18nText t={'color.red'}/>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
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
  simonComponent: {
    padding: 60
  },
  svgContainer: {
    marginVertical: 20,
  },
  instructionsStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10
  },
  table: {
    flex:1,
    alignSelf: 'center',
  },
  tableHeader:{
    flex:1,
  },
  tableBody:{
    flex:1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tableData: {
    width: 100,
    height: 40,
    padding: 10,
    borderWidth:1,
    alignSelf: 'center',
    justifyContent: 'center',
  }
});

export default SimonSays