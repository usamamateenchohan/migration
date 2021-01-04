import { api } from "../../service/api";
import * as types from "../Constants";

export const getEducationHistory = () => {
  const options = { url: `v1/cmv/client/programdetail/All` };
  options.types = [
    types.GET_EDUCATION_HISTORY_SUCCESS,
    types.GET_EDUCATION_HISTORY_FAILURE,
  ];

  return api.get(options);
};
