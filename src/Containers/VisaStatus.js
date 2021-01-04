import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import visaStatus from "./../Components/ContentArea/VisaStatus";

import {
  getVisaStatus,
  clientProfile,
  getAllVisaStatus,
} from "../store/Actions";

const mapStateToProps = (state) => {
  return {
    clientProfile: state.clientProfileReducer.clientProfile,
    visaStatusRes: state.visaStatusReducer.visaStatusRes,
    allVisaStatusRes: state.visaStatusReducer.allVisaStatusRes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetClientProfile: bindActionCreators(clientProfile, dispatch),
    onGetVisaStatus: bindActionCreators(getVisaStatus, dispatch),
    onGetAllVisaStatus: bindActionCreators(getAllVisaStatus, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(visaStatus);
