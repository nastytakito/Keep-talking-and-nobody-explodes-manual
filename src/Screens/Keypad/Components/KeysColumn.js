import React from 'react'
import {Image, StyleSheet} from 'react-native'

const IMAGE_SIZE = 70;

const KeysColumn = ({keysArray, ...props}) =>{
  return (
    keysArray.map((keyFilename, index )=>{
      console.log(keyFilename);
      return (
        <Image
          key={index}
          style={styles.box}
          source={keyFilename}
        />
      )
    })
  )
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: 'black',
    width:  IMAGE_SIZE,
    height: IMAGE_SIZE,
  }
});

export default KeysColumn