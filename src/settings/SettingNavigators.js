import React from 'react';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import { parentScreen } from '../utils/navigationOptions';
import Settings from './containers/Settings';

const SettingNavigators = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name='settings' color={tintColor} />,
      title: 'Settings',
      tabBarOnPress: (props) => {console.log(props)}
      ...parentScreen
    }
  }
}, {
  headerMode: 'float',
})

export default SettingNavigators;
