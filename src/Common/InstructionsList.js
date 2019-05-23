import React from 'react'
import i18n from "i18n-js"
import {Text, View, StyleSheet} from "react-native"
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

const InstructionsList = ({navigation, textStyle, containerStyle, orderedList, list, ...props})=>{
  const t = ()=>{
    return i18n.t(`screens.${navigation.state.routeName}.${list}`)
  };

  return t().map((instruction,index)=>(
    <View key={index} style={{...styles.container, ...containerStyle}}>
      <Text style={{...styles.text, ...textStyle}}> {orderedList ? (index + 1) + '-': '\u2022'} {instruction}</Text>
    </View>
  ))
};

const styles = StyleSheet.create({
  container: {
    padding: 7
  },
  text: {

  }
});

InstructionsList.defaultProps = {
  list: 'instructionsList',
  orderedList: false,
  textStyle:{},
  containerStyle: {}
};

InstructionsList.propTypes = {
  list: PropTypes.string,
  orderedList: PropTypes.bool,
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

export default withNavigation(InstructionsList);