import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ClientProfileCom from "./../Components/ContentArea/ClientProfile";

import {
  clientProfile,
  partnerDetail,
  familyMemberDetail,
  insertClientMember,
  updateClientProfile,
  updateClientProfileEmail,
  clientProfileSaveAddress,
  clientProfileSavePhone,
  clientProfilePassport,
  clientProfileMedical,
  onUpdateClientMember,
  onAddClientEmployer,
  onAddJobHistory,
  onAddQualification,
  onUpdateClientEmployer,
  onGetClientEmployer,
  onGetJobHistory,
  onPutJobHistory,
  onGetQualification,
  onPutQualification,
  onGetAllCountries,
  onGetPartnerJob,
  onGetPartnerQualification,
} from "../store/Actions";

const mapStateToProps = (state) => {
  return {
    clientProfile: state.clientProfileReducer.clientProfile,
    partnerDetail: state.clientProfileReducer.partnerDetail,
    familyMemberDetail: state.clientProfileReducer.familyMemberDetail,
    addClientMember: state.clientProfileReducer.addClientMember,
    addClientProfile: state.clientProfileReducer.addClientProfile,
    updateClientEmail: state.clientProfileReducer.updateClientEmail,
    updateClientAddress: state.clientProfileReducer.updateClientAddress,
    updateClientPhone: state.clientProfileReducer.updateClientPhone,
    updateClientPassport: state.clientProfileReducer.updateClientPassport,
    updateClientMedical: state.clientProfileReducer.updateClientMedical,
    updateClientProfileMember:
      state.clientProfileReducer.updateClientProfileMember,
    employerInformation: state.clientProfileReducer.employerInformation,
    addJobHistory: state.clientProfileReducer.addJobHistory,
    addQualificaion: state.clientProfileReducer.addQualificaion,
    updateEmployerInformation:
      state.clientProfileReducer.updateEmployerInformation,
    employerInformationRes: state.clientProfileReducer.employerInformationRes,
    getJobHistoryRes: state.clientProfileReducer.getJobHistoryRes,
    putJobHistoryRes: state.clientProfileReducer.putJobHistoryRes,
    getQualificationRes: state.clientProfileReducer.getQualificationRes,
    putQualificationRes: state.clientProfileReducer.putQualificationRes,
    getAllCountriesRes: state.clientProfileReducer.getAllCountriesRes,
    getPartnerJobRes: state.clientProfileReducer.getPartnerJobRes,
    getPartnerQualificationRes:
      state.clientProfileReducer.getPartnerQualificationRes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetClientProfile: bindActionCreators(clientProfile, dispatch),
    onGetPartnerDetail: bindActionCreators(partnerDetail, dispatch),
    onGetFamilyMemberDetail: bindActionCreators(familyMemberDetail, dispatch),
    onAddClientMember: bindActionCreators(insertClientMember, dispatch),
    onaddClientProfile: bindActionCreators(updateClientProfile, dispatch),

    onUpdateClientEmail: bindActionCreators(updateClientProfileEmail, dispatch),
    onClientProfileSaveAddress: bindActionCreators(
      clientProfileSaveAddress,
      dispatch
    ),
    onUpdateClientPhone: bindActionCreators(clientProfileSavePhone, dispatch),
    onUpdateClientPassport: bindActionCreators(clientProfilePassport, dispatch),
    onUpdateClientMedical: bindActionCreators(clientProfileMedical, dispatch),
    onUpdateClientProfileMember: bindActionCreators(
      onUpdateClientMember,
      dispatch
    ),
    onAddemployerInformation: bindActionCreators(onAddClientEmployer, dispatch),
    onaddJobHistory: bindActionCreators(onAddJobHistory, dispatch),
    onAddQualificaion: bindActionCreators(onAddQualification, dispatch),
    onUpdateEmployerInformation: bindActionCreators(
      onUpdateClientEmployer,
      dispatch
    ),
    onGetEmployerInformation: bindActionCreators(onGetClientEmployer, dispatch),
    onGetJobHistoryData: bindActionCreators(onGetJobHistory, dispatch),
    onPutJobHistoryData: bindActionCreators(onPutJobHistory, dispatch),
    onGetQualificationData: bindActionCreators(onGetQualification, dispatch),
    onPutQualificationData: bindActionCreators(onPutQualification, dispatch),
    onGetAllCountriesData: bindActionCreators(onGetAllCountries, dispatch),
    onGetPartnerJobData: bindActionCreators(onGetPartnerJob, dispatch),
    onGetPartnerQualificationData: bindActionCreators(
      onGetPartnerQualification,
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfileCom);
