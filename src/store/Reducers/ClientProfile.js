import * as types from "../Constants";
import { openNotificationWithIcon } from "../../Components/Common/reUseFunctions";

export const clientProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CLIENT_PROFILE_SUCCESS:
      return { ...state, clientProfile: action.payload };
    case types.CLIENT_PROFILE_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.GET_PARTNER_DETAIL_SUCCESS:
      return { ...state, partnerDetail: action.payload };
    case types.GET_PARTNER_DETAIL_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.GET_FAMILY_MEMBER_SUCCESS:
      return { ...state, familyMemberDetail: action.payload };
    case types.GET_FAMILY_MEMBER_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.POST_CLIENT_MEMBER_SUCCESS:
      return { ...state, addClientMember: action.payload };
    case types.POST_CLIENT_MEMBER_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.PUT_CLIENT_PROFILE_SUCCESS:
      return { ...state, addClientProfile: action.payload };
    case types.PUT_CLIENT_PROFILE_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.POST_CLIENT_EMAIL_SUCCESS:
      return { ...state, updateClientEmail: action.payload };
    case types.POST_CLIENT_EMAIL_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.POST_CLIENT_ADDRESS_SUCCESS:
      return { ...state, updateClientAddress: action.payload };
    case types.POST_CLIENT_ADDRESS_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.POST_CLIENT_PHONE_SUCCESS:
      return { ...state, updateClientPhone: action.payload };
    case types.POST_CLIENT_PHONE_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    case types.POST_CLIENT_PASSPORT_SUCCESS:
      return { ...state, updateClientPassport: action.payload };
    case types.POST_CLIENT_PASSPORT_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    case types.POST_CLIENT_MEDICAL_SUCCESS:
      return { ...state, updateClientMedical: action.payload };
    case types.POST_CLIENT_MEDICAL_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.PUT_CLIENT_MEMBER_SUCCESS:
      return { ...state, updateClientProfileMember: action.payload };
    case types.PUT_CLIENT_MEMBER_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.GET_EMPLOYRE_INFORMATION_SUCCESS:
      return { ...state, employerInformationRes: action.payload };
    case types.GET_EMPLOYRE_INFORMATION_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.POST_EMPLOYRE_INFORMATION_SUCCESS:
      return { ...state, employerInformation: action.payload };
    case types.POST_EMPLOYRE_INFORMATION_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.PUT_EMPLOYRE_INFORMATION_SUCCESS:
      return { ...state, updateEmployerInformation: action.payload };
    case types.PUT_EMPLOYRE_INFORMATION_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.POST_JOB_HISTORY_SUCCESS:
      return { ...state, addJobHistory: action.payload };
    case types.POST_JOB_HISTORY_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.POST_QUALIFICATION_SUCCESS:
      return { ...state, addQualificaion: action.payload };
    case types.POST_QUALIFICATION_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    case types.GET_JOB_HISTORY_SUCCESS:
      return { ...state, getJobHistoryRes: action.payload };
    case types.GET_JOB_HISTORY_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    case types.PUT_JOB_HISTORY_SUCCESS:
      return { ...state, putJobHistoryRes: action.payload };
    case types.PUT_JOB_HISTORY_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    case types.GET_QUALIFICATION_SUCCESS:
      return { ...state, getQualificationRes: action.payload };
    case types.GET_QUALIFICATION_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    case types.PUT_QUALIFICATION_SUCCESS:
      return { ...state, putQualificationRes: action.payload };
    case types.PUT_QUALIFICATION_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    case types.GET_COUNTRIES_SUCCESS:
      return { ...state, getAllCountriesRes: action.payload };
    case types.GET_COUNTRIES_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    case types.GET_PARTNER_JOB_SUCCESS:
      return { ...state, getPartnerJobRes: action.payload };
    case types.GET_PARTNER_JOB_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    case types.GET_PARTNER_QUALIFICATION_SUCCESS:
      return { ...state, getPartnerQualificationRes: action.payload };
    case types.GET_PARTNER_QUALIFICATION_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }
    // // case types.GET_SESSION_SUCCESS:
    //   return { ...state, sessionRes: action.payload };
    // case types.GET_SESSION_FAILURE:
    //   openNotificationWithIcon(
    //     'error',
    //     'Error',
    //     action.payload.response.data.msg
    //   );
    //   if (action.payload.response === "undefined") {
    //     window.location.assign('/login');
    //   }
    // case types.LOGOUT_SUCCESS:
    //   return { ...state, logoutRes: action.payload };
    // case types.LOGOUT_FAILURE:
    //   openNotificationWithIcon(
    //     'error',
    //     'Error',
    //     action.payload.response.data.msg
    //   );
    //   if (action.payload.response === "undefined") {
    //     window.location.assign('/login');
    //   }
    default:
      return state;
  }
};
