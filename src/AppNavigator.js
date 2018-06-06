import React from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions, StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';

import { addListener } from './redux/middlewares';
import AuthLoadingNavigators from './auth-loading/AuthLoadingNavigators';
import LoginNavigators from './login/LoginNavigators';
import DashboardNavigators from './dashboard/DashboardNavigators';
import SettingNavigators from './settings/SettingNavigators';

const MainNavigators = TabNavigator({
    SettingNavigators,
    DashboardNavigators,
  }, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveTintColor: '#bebebe',
      activeBackgroundColor: '#000000',
      activeTintColor: '#ffffff',
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      style: {
        backgroundColor: '#000000'
      }
    },
  }
);

const RootNavigator = StackNavigator({
  AuthLoadingNavigators,
  LoginNavigators,
  MainNavigators
}, {
  navigationOptions: {
    header: null,
  }
})

export const AppNavigator = SwitchNavigator({
  RootNavigator
}, {
  initialRouteName: 'RootNavigator',
});

class AppWithNavigationState extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  onBackButtonPressAndroid = () => {
    const { dispatch, nav } = this.props;
    console.log(nav.routes);
    // if (nav.routes.length === 1 && (nav.routes[0].routeName === 'LoginNavigators' || nav.routes[0].routeName === 'MainNavigators')) {
    //     return false;
    // }
    // if (shouldCloseApp(nav)) return false
    dispatch({ type: 'Navigation/BACK' });
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
