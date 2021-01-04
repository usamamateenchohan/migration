import { api } from "../../service/api";
import * as types from "../Constants";

export const clientProfile = () => {
  const options = { url: "V1/cmv/clientprofile" };
  options.types = [types.CLIENT_PROFILE_SUCCESS, types.CLIENT_PROFILE_FAILURE];

  return api.get(options);
};

export const partnerDetail = (id) => {
  const options = { url: `v1/cmv/clientprofile/GetClientPartner/${1}` };
  options.types = [
    types.GET_PARTNER_DETAIL_SUCCESS,
    types.GET_PARTNER_DETAIL_FAILURE,
  ];

  return api.get(options);
};
export const updateClientProfile = (data) => {
  const options = { url: `v1/cmv/clientprofile` };
  options.types = [
    types.PUT_CLIENT_PROFILE_SUCCESS,
    types.PUT_CLIENT_PROFILE_FAILURE,
  ];

  return api.put(options, data);
};

export const updateClientProfileEmail = (data) => {
  const options = { url: "v1/cmv/clientprofile/SaveEmail" };
  options.types = [
    types.POST_CLIENT_EMAIL_SUCCESS,
    types.POST_CLIENT_EMAIL_FAILURE,
  ];

  return api.post(options, data);
};

export const clientProfileSaveAddress = (data) => {
  const options = { url: "v1/cmv/clientprofile/SaveAddress" };
  options.types = [
    types.POST_CLIENT_ADDRESS_SUCCESS,
    types.POST_CLIENT_ADDRESS_FAILURE,
  ];

  return api.post(options, data);
};

export const clientProfileSavePhone = (data) => {
  const options = { url: "v1/cmv/clientprofile/SavePhone" };
  options.types = [
    types.POST_CLIENT_PHONE_SUCCESS,
    types.POST_CLIENT_PHONE_FAILURE,
  ];

  return api.post(options, data);
};

export const clientProfilePassport = (data) => {
  const options = { url: "v1/cmv/clientprofile/SavePassport" };
  options.types = [
    types.POST_CLIENT_PASSPORT_SUCCESS,
    types.POST_CLIENT_PASSPORT_FAILURE,
  ];

  return api.post(options, data);
};

export const clientProfileMedical = (data) => {
  const options = { url: "v1/cmv/clientprofile/SaveMedical" };
  options.types = [
    types.POST_CLIENT_MEDICAL_SUCCESS,
    types.POST_CLIENT_MEDICAL_FAILURE,
  ];

  return api.post(options, data);
};

export const familyMemberDetail = (id) => {
  const options = { url: `v1/cmv/clientprofile/GetClientFamilyMembers/${1}` };
  options.types = [
    types.GET_FAMILY_MEMBER_SUCCESS,
    types.GET_FAMILY_MEMBER_FAILURE,
  ];

  return api.get(options);
};

export const insertClientMember = (id) => {
  const options = { url: "v1/cmv/clientprofile/InsertClientMember" };
  options.types = [
    types.POST_CLIENT_MEMBER_SUCCESS,
    types.POST_CLIENT_MEMBER_FAILURE,
  ];

  return api.post(options);
};

export const onUpdateClientMember = (data) => {
  const options = { url: "v1/cmv/clientprofile/UpdateClientMember" };
  options.types = [
    types.PUT_CLIENT_MEMBER_SUCCESS,
    types.PUT_CLIENT_MEMBER_FAILURE,
  ];

  return api.put(options, data);
};

export const onGetClientEmployer = () => {
  const options = { url: "v1/cmv/clientemployer/All" };
  options.types = [
    types.GET_EMPLOYRE_INFORMATION_SUCCESS,
    types.GET_EMPLOYRE_INFORMATION_FAILURE,
  ];

  return api.get(options);
};

export const onAddClientEmployer = (data) => {
  const options = { url: "v1/cmv/clientemployer" };
  options.types = [
    types.POST_EMPLOYRE_INFORMATION_SUCCESS,
    types.POST_EMPLOYRE_INFORMATION_FAILURE,
  ];

  return api.post(options, data);
};

export const onUpdateClientEmployer = (data) => {
  const options = { url: "v1/cmv/clientemployer" };
  options.types = [
    types.PUT_EMPLOYRE_INFORMATION_SUCCESS,
    types.PUT_EMPLOYRE_INFORMATION_FAILURE,
  ];

  return api.put(options, data);
};

export const onAddJobHistory = (data) => {
  const options = { url: "v1/cmv/client/jobhistory" };
  options.types = [
    types.POST_JOB_HISTORY_SUCCESS,
    types.POST_JOB_HISTORY_FAILURE,
  ];

  return api.post(options, data);
};

export const onGetJobHistory = () => {
  const options = { url: "v1/cmv/client/jobhistory/All" };
  options.types = [
    types.GET_JOB_HISTORY_SUCCESS,
    types.GET_JOB_HISTORY_FAILURE,
  ];

  return api.get(options);
};

export const onPutJobHistory = (data) => {
  const options = { url: "v1/cmv/client/jobhistory" };
  options.types = [
    types.PUT_JOB_HISTORY_SUCCESS,
    types.PUT_JOB_HISTORY_FAILURE,
  ];

  return api.put(options, data);
};

export const onAddQualification = (data) => {
  const options = { url: "v1/cmv/client/educationalhistory" };
  options.types = [
    types.POST_QUALIFICATION_SUCCESS,
    types.POST_QUALIFICATION_FAILURE,
  ];

  return api.post(options, data);
};

export const onGetQualification = () => {
  const options = { url: `v1/cmv/client/educationalhistory/All` };
  options.types = [
    types.GET_QUALIFICATION_SUCCESS,
    types.GET_QUALIFICATION_FAILURE,
  ];

  return api.get(options);
};

export const onPutQualification = (data) => {
  const options = { url: `v1/cmv/client/educationalhistory` };
  options.types = [
    types.PUT_QUALIFICATION_SUCCESS,
    types.PUT_QUALIFICATION_FAILURE,
  ];

  return api.put(options, data);
};

export const onGetAllCountries = () => {
  const options = { url: "v1/config/GetAllCountries" };
  options.types = [types.GET_COUNTRIES_SUCCESS, types.GET_COUNTRIES_FAILURE];

  return api.get(options);
};

//WORKING
export const onGetPartnerJob = (id) => {
  const options = {
    url: `v1/cmv/client/jobhistory/GetPartnerJobHistory/${id}`,
  };
  options.types = [
    types.GET_PARTNER_JOB_SUCCESS,
    types.GET_PARTNER_JOB_FAILURE,
  ];

  return api.get(options);
};

export const onGetPartnerQualification = (id) => {
  const options = {
    url: `/v1/cmv/client/educationalhistory/GetPartnerEducationalHistory/${id}`,
  };
  options.types = [
    types.GET_PARTNER_QUALIFICATION_SUCCESS,
    types.GET_PARTNER_QUALIFICATION_FAILURE,
  ];

  return api.get(options);
};
