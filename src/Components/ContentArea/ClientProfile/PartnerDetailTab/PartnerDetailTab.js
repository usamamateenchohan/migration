import React from "react";
import { Tabs } from "antd";
import PartnerPersonInformation from "./PartnerPersonsData/partnerPersonsData";
import ParnerJobHistory from "./PartnerJobHistory/PartnerJobHistory";
import PartnerQualification from "./PartnerQualification/PartnerQualification";

const { TabPane } = Tabs;

const PartnerDetailTabsList = ({
  onGetPartnerDetail,
  partnerDetail,

  onaddClientProfile,
  onUpdateClientEmail,
  onClientProfileSaveAddress,
  onUpdateClientPhone,
  onUpdateClientPassport,
  onUpdateClientMedical,
  onUpdateClientProfileMember,

  getAllCountriesRes,
  onGetAllCountriesData,

  onGetJobHistoryData,
  getJobHistoryRes,

  onaddJobHistory,

  onGetQualificationData,

  onGetClientProfile,
  clientProfile,

  onGetPartnerJobData,
  getPartnerJobRes,

  onPutJobHistoryData,

  onGetPartnerQualificationData,
  getPartnerQualificationRes,

  onPutQualificationData,

  onAddQualificaion,
}) => {
  return (
    <div className="client-profile-tabs">
      <Tabs defaultActiveKey="1" type="card" size="small" className="mar-r">
        <TabPane tab="Partner Detail" key="1">
          <PartnerPersonInformation
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
          />
        </TabPane>
        <TabPane tab="Job History" key="3">
          <ParnerJobHistory
            onGetPartnerDetail={onGetPartnerDetail}
            partnerDetail={partnerDetail}
            onGetJobHistoryData={onGetJobHistoryData}
            getJobHistoryRes={getJobHistoryRes}
            onaddJobHistory={onaddJobHistory}
            onGetPartnerJobData={onGetPartnerJobData}
            getPartnerJobRes={getPartnerJobRes}
            onPutJobHistoryData={onPutJobHistoryData}
          />
        </TabPane>
        <TabPane tab="Qualification" key="4">
          <PartnerQualification
            onGetPartnerDetail={onGetPartnerDetail}
            partnerDetail={partnerDetail}
            onGetJobHistoryData={onGetJobHistoryData}
            getJobHistoryRes={getJobHistoryRes}
            onaddJobHistory={onaddJobHistory}
            onGetQualificationData={onGetQualificationData}
            onGetClientProfile={onGetClientProfile}
            clientProfile={clientProfile}
            onGetPartnerQualificationData={onGetPartnerQualificationData}
            getPartnerQualificationRes={getPartnerQualificationRes}
            onPutQualificationData={onPutQualificationData}
            onAddQualificaion={onAddQualificaion}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PartnerDetailTabsList;
