import { api } from "../../service/api";
import * as types from "../Constants";

export const getVisaStatus = (id) => {
  const options = { url: `v1/company/visastatus/${id}` };
  options.types = [
    types.GET_VISA_STATUS_SUCCESS,
    types.GET_VISA_STATUS_FAILURE,
  ];

  return api.get(options);
};

export const getAllVisaStatus = (id) => {
  const options = {
    url: `v1/company/visastatus/All/fe9506ec-7cdf-4c42-81c4-345bd51a12ef`,
  };
  options.types = [
    types.GET_ALL_VISA_STATUS_SUCCESS,
    types.GET_ALL_VISA_STATUS_FAILURE,
  ];

  return api.get(options);
};
