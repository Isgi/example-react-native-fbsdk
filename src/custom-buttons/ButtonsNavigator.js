import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

let LeftButtonMenu = (props) => <Icon underlayColor='#ffffff17' containerStyle={styles.iconMenu} name='menu' color='#ffffff' onPress={()=>props.navigation.navigate('DrawerOpen')} />

let LeftButtonBack = (props) => <Icon underlayColor='#ffffff17' containerStyle={styles.iconMenu} name='arrow-back' color='#ffffff' onPress={()=>props.navigation.dispatch({ type: 'Navigation/BACK' })} />

let RightButtonMore = (props) => (
  <View style={styles.rightButton}>
    <Icon name='notifications' color='#ffffff' underlayColor='#ffffff17' onPress={()=>{}} containerStyle={styles.iconMenu} />
    <Icon name='more-vert' color='#ffffff' underlayColor='#ffffff17' containerStyle={styles.iconMenu} />
  </View>
)

LeftButtonMenu = withNavigation(LeftButtonMenu);
LeftButtonBack = withNavigation(LeftButtonBack);
RightButtonMore = withNavigation(RightButtonMore);

export {
  LeftButtonMenu,
  RightButtonMore,
  LeftButtonBack
}

const styles = StyleSheet.create({
  rightButton: {
    flexDirection: 'row',
  },
  iconMenu: {
    height: 50,
    width: 50
  }
})
