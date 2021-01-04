import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import ClientProfileTabList from "./ClientProfileTab/ClientProfileTabList";
import PartnerDetailTabsList from "./PartnerDetailTab/PartnerDetailTab";
import FamilyMemberDetail from "./FamilyMemberDetail";

const { TabPane } = Tabs;

const ClientTemplatesTabs = ({
  onGetClientProfile,
  clientProfile,

  onGetPartnerDetail,
  partnerDetail,

  onGetFamilyMemberDetail,
  familyMemberDetail,

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
}) => {
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="email-tabs-sec mar-client-tab">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="CLIENT PROFILE" key="1">
          <ClientProfileTabList
            onGetClientProfile={onGetClientProfile}
            clientProfile={clientProfile}
            onaddClientProfile={onaddClientProfile}
            onUpdateClientEmail={onUpdateClientEmail}
            onClientProfileSaveAddress={onClientProfileSaveAddress}
            onUpdateClientPhone={onUpdateClientPhone}
            onUpdateClientPassport={onUpdateClientPassport}
            onUpdateClientMedical={onUpdateClientMedical}
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
          />
        </TabPane>
        <TabPane tab="PARTNER DETAIL" key="2">
          <PartnerDetailTabsList
            onGetPartnerDetail={onGetPartnerDetail}
            partnerDetail={partnerDetail}
            onaddClientProfile={onaddClientProfile}
            onUpdateClientEmail={onUpdateClientEmail}
            onClientProfileSaveAddress={onClientProfileSaveAddress}
            onUpdateClientPhone={onUpdateClientPhone}
            onUpdateClientPassport={onUpdateClientPassport}
            onUpdateClientMedical={onUpdateClientMedical}
            onUpdateClientProfileMember={onUpdateClientProfileMember}
            getAllCountriesRes={getAllCountriesRes}
            onGetAllCountriesData={onGetAllCountriesData}
            onGetJobHistoryData={onGetJobHistoryData}
            getJobHistoryRes={getJobHistoryRes}
            onGetQualificationData={onGetQualificationData}
            onGetClientProfile={onGetClientProfile}
            clientProfile={clientProfile}
            onGetPartnerJobData={onGetPartnerJobData}
            getPartnerJobRes={getPartnerJobRes}
            onPutJobHistoryData={onPutJobHistoryData}
            onaddJobHistory={onaddJobHistory}
            onGetPartnerQualificationData={onGetPartnerQualificationData}
            getPartnerQualificationRes={getPartnerQualificationRes}
            onPutQualificationData={onPutQualificationData}
            onAddQualificaion={onAddQualificaion}
          />
        </TabPane>
        <TabPane tab="FAMILY MEMBER DETAIL" key="3">
          <FamilyMemberDetail
            onGetFamilyMemberDetail={onGetFamilyMemberDetail}
            familyMemberDetail={familyMemberDetail}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ClientTemplatesTabs;
