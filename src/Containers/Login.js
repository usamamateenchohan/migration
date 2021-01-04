import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../Components/ContentArea/LoginComponent';

import {
  signIn
} from '../store/Actions';

const mapStateToProps = state => {
  return {
    signInRes: state.userReducer.signInRes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: bindActionCreators(signIn, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);