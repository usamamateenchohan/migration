import React from "react";
import { Row, Col } from "antd";
import VisaStatus from "./VisaStatus";

const VisaStatusComponent = ({
  clientProfile,
  onGetClientProfile,

  onGetVisaStatus,
  visaStatusRes,

  onGetAllVisaStatus,
  allVisaStatusRes,
}) => (
  <div className="container mb-50">
    <VisaStatus
      clientProfile={clientProfile}
      onGetClientProfile={onGetClientProfile}
      onGetVisaStatus={onGetVisaStatus}
      visaStatusRes={visaStatusRes}
      onGetAllVisaStatus={onGetAllVisaStatus}
      allVisaStatusRes={allVisaStatusRes}
    />
  </div>
);

export default VisaStatusComponent;
