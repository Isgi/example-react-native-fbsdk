import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default () => (
  <View style={styles.container}>
    {/* <Image resizeMode='contain' source={require('../../img/logo/zahirsimply-white.png')} style={{height: 40, alignSelf: 'center'}}/> */}
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0077af',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
