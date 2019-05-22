import {AsyncStorage} from 'react-native'

const DeviceStorage = {
  setItem(key, value){
    return AsyncStorage.setItem(key,value);
  },
  getItem(key){
    return AsyncStorage.getItem(key)
  }
};

export default DeviceStorage