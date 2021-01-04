import * as types from "../Constants";
import { openNotificationWithIcon } from "../../Components/Common/reUseFunctions";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      if (action.payload.accessToken) {
        localStorage.setItem(
          "AccessToken",
          JSON.stringify(action.payload.accessToken)
        );
        window.location.assign("/email");
      }
      return { ...state, signInRes: action.payload };
    case types.LOGIN_FAILURE:
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
    //   if (action.payload.response.statusText === "Unauthorized") {
    //     window.location.assign('/login');
    //   }
    case types.LOGOUT_SUCCESS:
      localStorage.removeItem("AccessToken");
      if (action.type === "LOGOUT_SUCCESS") {
        window.location.assign("/login");
      }
      return { ...state, logoutRes: action.payload };
    case types.LOGOUT_FAILURE:
      openNotificationWithIcon("error", "Error", action.payload.message);
      if (action.payload.response === "undefined") {
        window.location.assign("/login");
      }

    default:
      return state;
  }
};
