import AuthLoading from './containers/AuthLoading';
import { StackNavigator } from 'react-navigation';

const AuthLoadingNavigators = StackNavigator({
  AuthLoading: {
    screen: AuthLoading,
    navigationOptions: {
      header: null,
      drawerLockMode: 'locked-closed'
    }
  },
})

export default AuthLoadingNavigators;
