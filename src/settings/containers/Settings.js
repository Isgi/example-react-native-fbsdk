import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Settings from '../screens/Settings';
import { navigateToSettings } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    navigateToSettings,
  }, dispatch)
}

const mapStateToProps = (state) => ({
  settings: state.settings
});

export default connect(mapStateToProps)(Settings);
