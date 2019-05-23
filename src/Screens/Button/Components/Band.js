import React from 'react'
import I18nText from "../../../Common/I18nText";
import PropTypes from 'prop-types'
import {View, StyleSheet} from "react-native";

const getBgColor = (color)=>{
  switch (color) {
    case('blue'): return '#0000ff';
    case('white'): return '#ffffff';
    case('yellow'): return '#ffff00';
    case('other'):
    default: return '#ff0000';

  }
};

const Bands = ({bandColor, ...props}) => {
  let opacity = '20';
  let backgroundColor = getBgColor(bandColor) + opacity;

  return (
    <View style={{...styles.content, backgroundColor,}}>
      <View style={styles.bandName}>
        <I18nText style={styles.title} t={'subSection.bands.'+bandColor}/>
      </View>
      <View style={styles.bandDescription}>
        <I18nText style={styles.subtitle} t={'subSection.bandsDescription.'+bandColor}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    borderWidth: 1,
    margin: 2,
    borderRadius: 4
  },
  bandName: {

  },
  bandDescription: {

  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  subtitle: {
    fontSize: 20,
  }
});

Bands.defaultProps = {
  bandColor: '[no_band]'
};

Bands.propTypes = {
  bandColor: PropTypes.string.isRequired
};

export default Bands