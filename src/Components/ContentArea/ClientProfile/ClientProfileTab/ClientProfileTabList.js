import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import { Tabs, Radio } from "antd";

import PersonInformation from "./PersonData";
import EmployerForm from "./../../EmployerInformation/EmployerFrom";
import JobHistory from "./../../JobHistoryComponent/JobHistory";
import Qualification from "./../../QualificaionComponent/QualificationForm";

const { TabPane } = Tabs;

const ClientProfileTabList = ({
  onGetClientProfile,
  clientProfile,

  onaddClientProfile,

  onUpdateClientEmail,

  onClientProfileSaveAddress,

  onUpdateClientPhone,

  onUpdateClientPassport,

  onUpdateClientMedical,

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
}) => {
  return (
    <div className="client-profile-tabs">
      <Tabs defaultActiveKey="1" type="card" size={"small"} className="mar-r">
        <TabPane tab="Client Information" key="1">
          <PersonInformation
            onGetClientProfile={onGetClientProfile}
            clientProfile={clientProfile}
            onaddClientProfile={onaddClientProfile}
            onUpdateClientEmail={onUpdateClientEmail}
            onClientProfileSaveAddress={onClientProfileSaveAddress}
            onUpdateClientPhone={onUpdateClientPhone}
            onUpdateClientPassport={onUpdateClientPassport}
            onUpdateClientMedical={onUpdateClientMedical}
            getAllCountriesRes={getAllCountriesRes}
            onGetAllCountriesData={onGetAllCountriesData}
          />
        </TabPane>
        <TabPane tab="Employar Information" key="2">
          <EmployerForm
            onGetEmployerInformation={onGetEmployerInformation}
            employerInformationRes={employerInformationRes}
            onAddemployerInformation={onAddemployerInformation}
            onUpdateEmployerInformation={onUpdateEmployerInformation}
            onGetClientProfile={onGetClientProfile}
            clientProfile={clientProfile}
          />
        </TabPane>
        <TabPane tab="Job History" key="3">
          <JobHistory
            onaddJobHistory={onaddJobHistory}
            onGetClientProfile={onGetClientProfile}
            clientProfile={clientProfile}
            onGetJobHistoryData={onGetJobHistoryData}
            getJobHistoryRes={getJobHistoryRes}
            onPutJobHistoryData={onPutJobHistoryData}
          />
        </TabPane>
        <TabPane tab="Qualification" key="4">
          <Qualification
            clientProfile={clientProfile}
            onGetClientProfile={onGetClientProfile}
            onAddQualificaion={onAddQualificaion}
            onGetQualificationData={onGetQualificationData}
            getQualificationRes={getQualificationRes}
            onPutQualificationData={onPutQualificationData}
          />
        </TabPane>
        <TabPane tab="Basic Assesment Form"></TabPane>
        <TabPane tab="Assesment Form"></TabPane>
      </Tabs>
    </div>
  );
};

export default ClientProfileTabList;
