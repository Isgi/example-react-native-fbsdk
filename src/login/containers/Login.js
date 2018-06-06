import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigateToDashboard } from '../actions';
import { serviceSet } from '../../redux/actions';

import Login from '../screens/Login';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    serviceSet,
    navigateToDashboard
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
