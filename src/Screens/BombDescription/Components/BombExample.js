import React from 'react'
import I18nText from "../../../Utils/I18nText";
import FrontBombExample from "../../../Assets/Images/Bomb.svg";
import SideBombExample from "../../../Assets/Images/BombSide.svg";
import {StyleSheet, View} from "react-native";

const BombExample = () =>{
  return (
    <View style={styles.bombExample}>
      <I18nText style={styles.centerText} t={'bombExample'} />

      <FrontBombExample style={styles.frontBomb}/>
      <I18nText style={styles.centerText} t={'frontBomb'} />

      <SideBombExample style={styles.sideBomb}/>
      <I18nText style={styles.centerText} t={'sideBomb'} />
    </View>
  )
};

const styles = StyleSheet.create({
  bombExample:{
    borderWidth: 0.5,
    padding: 10,
    marginVertical: 20,
  },
  frontBomb:{
    padding: 100,
    margin: 10,
    justifyContent: 'center'
  },
  sideBomb: {
    padding: 100,
    margin: 10,
    justifyContent: 'center'
  },
  centerText: {
    textAlign: 'center',
    fontSize: 12
  }
});

export default BombExample