import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AdmissoinCom from "../Components/ContentArea/Admission";

import {
  clientProfile,
  getEducationHistory,
} from "../store/Actions";

const mapStateToProps = (state) => {
  return {
    educationHistoryRes: state.educationHistoryReducer.educationHistoryRes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetEducationHistory: bindActionCreators(getEducationHistory, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdmissoinCom);



