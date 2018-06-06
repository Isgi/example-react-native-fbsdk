import React from 'react';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import { parentScreen } from '../utils/navigationOptions';
import Dashboard from './screens/Dashboard';

const DashboardNavigators = StackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
      tabBarLabel: 'Dashboard',
      tabBarIcon: ({ tintColor }) => <Icon name='dashboard' color={tintColor} />,
      ...parentScreen
    }
  }
}, {
  headerMode: 'float',
})

export default DashboardNavigators;
