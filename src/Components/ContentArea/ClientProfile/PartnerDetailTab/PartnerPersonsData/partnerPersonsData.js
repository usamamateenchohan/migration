import React, { Fragment, useState, useEffect } from "react";
import PartnerPersonalInformation from "./PartnerPersonalInformation";
import PartnerPassportDetail from "./PartnerPassportDetail";
import PartnerVisaDetail from "./PartnerVisaDetail";

const PartnerPersonInformation = ({
  onGetPartnerDetail,
  partnerDetail,
  onUpdateClientProfileMember,
  onUpdateClientEmail,
  onClientProfileSaveAddress,
  onUpdateClientPhone,
  onUpdateClientPassport,
  onUpdateClientMedical,

  getAllCountriesRes,
  onGetAllCountriesData,
}) => {
  return (
    <Fragment>
      <PartnerPersonalInformation
        onGetPartnerDetail={onGetPartnerDetail}
        partnerDetail={partnerDetail}
        onUpdateClientProfileMember={onUpdateClientProfileMember}
        onUpdateClientEmail={onUpdateClientEmail}
        onClientProfileSaveAddress={onClientProfileSaveAddress}
        onUpdateClientPhone={onUpdateClientPhone}
      />
      <PartnerPassportDetail
        onGetPartnerDetail={onGetPartnerDetail}
        partnerDetail={partnerDetail}
        onUpdateClientPassport={onUpdateClientPassport}
        getAllCountriesRes={getAllCountriesRes}
        onGetAllCountriesData={onGetAllCountriesData}
      />
      <PartnerVisaDetail
        onGetPartnerDetail={onGetPartnerDetail}
        partnerDetail={partnerDetail}
        onUpdateClientMedical={onUpdateClientMedical}
        onUpdateClientProfileMember={onUpdateClientProfileMember}
      />
    </Fragment>
  );
};

export default PartnerPersonInformation;
