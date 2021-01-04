import React from "react";
import ClientTemplatesTabs from "./ProfileComponent";

const ClientComponent = ({
  onGetClientProfile,
  clientProfile,

  onGetPartnerDetail,
  partnerDetail,

  onGetFamilyMemberDetail,
  familyMemberDetail,

  onAddClientMember,
  addClientMember,

  onaddClientProfile,

  onUpdateClientEmail,

  onClientProfileSaveAddress,

  onUpdateClientPhone,

  onUpdateClientPassport,

  onUpdateClientMedical,

  onUpdateClientProfileMember,

  onGetEmployerInformation,
  employerInformationRes,
  onAddemployerInformation,
  onUpdateEmployerInformation,

  onaddJobHistory,

  onAddQualificaion,

  onGetJobHistoryData,
  getJobHistoryRes,

  onPutJobHistoryData,

  onGetQualificationData,
  getQualificationRes,

  onPutQualificationData,

  getAllCountriesRes,
  onGetAllCountriesData,

  onGetPartnerJobData,
  getPartnerJobRes,

  onGetPartnerQualificationData,
  getPartnerQualificationRes,
}) => (
  <div className="container">
    <ClientTemplatesTabs
      onGetClientProfile={onGetClientProfile}
      clientProfile={clientProfile}
      onGetPartnerDetail={onGetPartnerDetail}
      partnerDetail={partnerDetail}
      onGetFamilyMemberDetail={onGetFamilyMemberDetail}
      familyMemberDetail={familyMemberDetail}
      onaddClientProfile={onaddClientProfile}
      onUpdateClientEmail={onUpdateClientEmail}
      onClientProfileSaveAddress={onClientProfileSaveAddress}
      onUpdateClientPhone={onUpdateClientPhone}
      onUpdateClientPassport={onUpdateClientPassport}
      onUpdateClientMedical={onUpdateClientMedical}
      onUpdateClientProfileMember={onUpdateClientProfileMember}
      onGetEmployerInformation={onGetEmployerInformation}
      employerInformationRes={employerInformationRes}
      onAddemployerInformation={onAddemployerInformation}
      onUpdateEmployerInformation={onUpdateEmployerInformation}
      onaddJobHistory={onaddJobHistory}
      onAddQualificaion={onAddQualificaion}
      onGetJobHistoryData={onGetJobHistoryData}
      getJobHistoryRes={getJobHistoryRes}
      onPutJobHistoryData={onPutJobHistoryData}
      onGetQualificationData={onGetQualificationData}
      getQualificationRes={getQualificationRes}
      onPutQualificationData={onPutQualificationData}
      getAllCountriesRes={getAllCountriesRes}
      onGetAllCountriesData={onGetAllCountriesData}
      onGetPartnerJobData={onGetPartnerJobData}
      getPartnerJobRes={getPartnerJobRes}
      onGetPartnerQualificationData={onGetPartnerQualificationData}
      getPartnerQualificationRes={getPartnerQualificationRes}
    />
  </div>
);

export default ClientComponent;
