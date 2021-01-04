import React, { Fragment, useState, useEffect } from "react";
import PersonalInformation from "./PersonalInformation";
import PassportDetail from "./PassportDetail";
import SecondPassportDetail from "./SecondPassportDetail";
import VisaDetail from "./VisaDetail";
import MedicalDetail from "./MedicalDetail";

const PersonInformation = ({
  onGetClientProfile,
  clientProfile,
  onaddClientProfile,
  onUpdateClientEmail,
  onClientProfileSaveAddress,
  onUpdateClientPhone,
  onUpdateClientPassport,
  onUpdateClientMedical,

  getAllCountriesRes,
  onGetAllCountriesData,
}) => {
  console.log("clientProfile 123123 ", clientProfile);
  return (
    <Fragment>
      <PersonalInformation
        onGetClientProfile={onGetClientProfile}
        clientProfile={clientProfile}
        onaddClientProfile={onaddClientProfile}
        onUpdateClientEmail={onUpdateClientEmail}
        onClientProfileSaveAddress={onClientProfileSaveAddress}
        onUpdateClientPhone={onUpdateClientPhone}
      />
      <PassportDetail
        onGetClientProfile={onGetClientProfile}
        clientProfile={clientProfile}
        onaddClientProfile={onaddClientProfile}
        onUpdateClientPassport={onUpdateClientPassport}

        getAllCountriesRes={getAllCountriesRes}
        onGetAllCountriesData={onGetAllCountriesData}
      />
      <SecondPassportDetail
        onGetClientProfile={onGetClientProfile}
        clientProfile={clientProfile}
        onaddClientProfile={onaddClientProfile}
        onUpdateClientPassport={onUpdateClientPassport}

        getAllCountriesRes={getAllCountriesRes}
        onGetAllCountriesData={onGetAllCountriesData}
      />
      <VisaDetail
        onGetClientProfile={onGetClientProfile}
        clientProfile={clientProfile}
        onaddClientProfile={onaddClientProfile}
      />
      <MedicalDetail
        onGetClientProfile={onGetClientProfile}
        clientProfile={clientProfile}
        onaddClientProfile={onaddClientProfile}
        onUpdateClientMedical={onUpdateClientMedical}
      />
    </Fragment>
  );
};

export default PersonInformation;
