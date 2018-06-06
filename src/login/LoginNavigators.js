import Login from './containers/Login';
import { StackNavigator } from 'react-navigation';

const LoginNavigators = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      drawerLockMode: 'locked-closed'
    }
  },
})

export default LoginNavigators;
