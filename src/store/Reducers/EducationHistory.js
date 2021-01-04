import * as types from "../Constants";
import { openNotificationWithIcon } from "../../Components/Common/reUseFunctions";

export const educationHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_EDUCATION_HISTORY_SUCCESS:
      return { ...state, educationHistoryRes: action.payload };
    case types.GET_EDUCATION_HISTORY_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    default:
      return state;
  }
};
