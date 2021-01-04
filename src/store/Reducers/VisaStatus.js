import * as types from "../Constants";
import { openNotificationWithIcon } from "../../Components/Common/reUseFunctions";

export const visaStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_VISA_STATUS_SUCCESS:
      return { ...state, visaStatusRes: action.payload };
    case types.GET_VISA_STATUS_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    case types.GET_ALL_VISA_STATUS_SUCCESS:
      return { ...state, allVisaStatusRes: action.payload };
    case types.GET_ALL_VISA_STATUS_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    default:
      return state;
  }
};
