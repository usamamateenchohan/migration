import { combineReducers } from "redux";
import { userReducer } from "./User";
import { clientProfileReducer } from "./ClientProfile";
import { visaStatusReducer } from "./VisaStatus";
import { educationHistoryReducer } from './EducationHistory';

const reducersObj = {
  userReducer,
  clientProfileReducer,
  visaStatusReducer,
  educationHistoryReducer
};

export default combineReducers(reducersObj);
