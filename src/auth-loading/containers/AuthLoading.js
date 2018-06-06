import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthLoading from '../screens/AuthLoading';
import { navigateToLogin, navigateToDashboard } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    navigateToLogin,
    navigateToDashboard
  }, dispatch)
}

const mapStateToProps = (state) => ({
  settings: state.settings
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
