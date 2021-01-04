import React, { Fragment, useState, useEffect } from "react";
import { Form, Select, DatePicker, Button, Spin } from "antd";
import moment from "moment";
import { yyyymmddFormate } from "../../../../Common/reUseFunctions";
import { visaType } from "../../../../../statics/data/visaType";

const PartnerVisaDetail = ({
  onGetPartnerDetail,
  partnerDetail,
  onUpdateClientProfileMember,
  onUpdateClientMedical,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(true);
  const [selectedContry, setSelectedContry] = useState([]);

  useEffect(() => {
    onGetPartnerDetail();
  }, [onGetPartnerDetail]);

  useEffect(() => {
    // const passportIssueDateData =
    // partnerDetail &&
    // partnerDetail.passports.map((item) => {
    //   return new moment(item.passportIssueDate);
    // });
    form.setFieldsValue({
      current_visa_type: partnerDetail && partnerDetail.currentVisaTypeId,
      current_new_zeland_visa_expiry_date:
        partnerDetail &&
        new moment(partnerDetail.currentNewZealandVisaExpiry),
      medical_issue_date:
        partnerDetail &&
        new moment(
          partnerDetail &&
          partnerDetail.medicals &&
          partnerDetail.medicals[0].medicalIssueDate
        ),
      xray_date:
        partnerDetail &&
        new moment(
          partnerDetail &&
          partnerDetail.medicals &&
          partnerDetail.medicals[0].xrayIssueDate
        ),
    });
  }, [partnerDetail]);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setLoading(true)
    const data = {
      id: partnerDetail && partnerDetail.id,
      branchId: partnerDetail && partnerDetail.branchId,
      clientNumber: "string",
      familyId: partnerDetail && partnerDetail.familyId,
      processingGroupId: 0,
      agentId: partnerDetail && partnerDetail.agentId,
      clientTag: 0,
      firstName: partnerDetail && partnerDetail.firstName,
      lastName: partnerDetail && partnerDetail.lastName,
      middleName: partnerDetail && partnerDetail.middleName,
      title: "string",
      gender: 0,
      dateOfBirth: "2020-12-10T13:21:23.318Z",
      maritalStatus: "string",
      dependentChildren: 0,
      notes: partnerDetail && partnerDetail.notes,
      occupation: "string",
      occupationOrganization: "string",
      inzUserName: "string",
      inzPassword: "string",
      imageBlobUrl: "string",
      nationalityId: "string",
      nationalityCountry: 0,
      skypeID: "string",
      preferredName: "string",
      isSubscribed: true,
      arbitaryJson: "string",
      dependentClientIds: "string",
      modifiedBy: partnerDetail && partnerDetail.clientId,
      currentVisaTypeId: values && values.current_visa_type,
      currentNewZealandVisaExpiry:
        values && values.current_new_zeland_visa_expiry_date,
      travelConditionsValidTo: "2020-12-10T13:21:23.318Z",
      visaText: "string",
      visaDenied: true,
      deniedText: "string",
      clientNumberIZM: "string",
      inzFeeDate: "2020-12-10T13:21:23.318Z",
      memberType: "spouse",
      clientId: partnerDetail && partnerDetail.id,
      nzqaOnlineSubDate: "2020-12-10T13:21:23.318Z",
      nzqaDocumentSubDate: "2020-12-10T13:21:23.318Z",
      nzqaDocumentRetDate: "2020-12-10T13:21:23.318Z",
      visaCountryId: 0,
      visaCountyType: 0,
      age: 0,
      jobSectorId: 0,
      sourceId: 0,
      sourceDescription: "string",
      clientSerial: "string",
      companyOptional: "string",
      dealWorth: "string",
      saleDate: "2020-12-10T13:21:23.318Z",
      clientPermission: {
        signed: true,
        onshore: true,
        active: true,
        allowUpdate: true,
        areaAccess: true,
      },
    };
    debugger;
    onUpdateClientProfileMember(data).then(() => {
      onGetPartnerDetail();
      setLoading(false)
    })

    debugger;
    const medicalId =
      partnerDetail && partnerDetail.medicals.length > 0 ? partnerDetail.medicals[0].id : 0;
    const medicalClientId =
      partnerDetail && partnerDetail.medicals.length > 0 ? partnerDetail.medicals[0].clientId : partnerDetail.clientId;
    const partnerMedicalData = [
      {
        id: medicalId,
        clientId: medicalClientId,
        er: "string",
        medicalIssueDate: values.medical_issue_date,
        medicalExpiryDate: "2020-12-09T10:43:57.701Z",
        xrayIssueDate: values.xray_date,
        xrayExpiryDate: "2020-12-09T10:43:57.701Z",
        medicalGrading: "string",
        xrayGrading: "string",
        medicalNotes: "string",
        medicalNotesDetail: "string",
        modifiedBy: medicalClientId,
      },
    ];
    debugger;
    onUpdateClientMedical(partnerMedicalData);
  };
  const { Option } = Select;

  const handleChangeCountry = (value) => {
    setSelectedContry(value);
  };
  console.log("partnerDetailpartnerDetail", partnerDetail);
  return (
    <Fragment>
      <Spin size="large" spinning={loading}>
        <Form name="register" onFinish={onFinish} scrollToFirstError form={form}>
          <div className="container client-info-tab information-area-bg mar-top padding-tb">
            <div className="client-information-container">
              <div className="align-center">
                <h1 className="info-heading">PARTNER'S VISA DETAIL (IF KNOWN)</h1>
              </div>
              <div className="information-area">
                <ul>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Current Visa Type:</span>
                    <div className="w40-40">
                      {showPartnerForm === false && (
                        <span>
                          {partnerDetail && partnerDetail.currentVisaTypeId}
                        </span>
                      )}
                      {showPartnerForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="current_visa_type"
                          rules={[
                            {
                              required: false,
                              message: "Please input your current visa type!",
                            },
                          ]}
                        >
                          <Select
                            placeholder="Select"
                            value={selectedContry}
                            onChange={handleChangeCountry}
                            style={{ width: "100%" }}
                            showSearch
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                            getPopupContainer={(trigger) => trigger.parentElement}
                          >
                            {visaType && visaType.map((item, index) => (
                              <Option key={index} value={item.id}>
                                {item.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">
                      Current New Zeland Visa Expiry <br /> Date:
                  </span>
                    <div className="w40-40">
                      {showPartnerForm === false && (
                        <span>
                          {partnerDetail &&
                            yyyymmddFormate(
                              partnerDetail.currentNewZealandVisaExpiry
                            )}
                        </span>
                      )}
                      {showPartnerForm === true && (
                        <Form.Item
                          name="current_new_zeland_visa_expiry_date"
                          className="profile-form"
                        >
                          <DatePicker />
                        </Form.Item>
                      )}
                    </div>
                  </li>

                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Medical Issue Date:</span>
                    <div className="w40-40">
                      {showPartnerForm === false &&
                        partnerDetail &&
                        partnerDetail.medicals &&
                        partnerDetail.medicals.map((item, index) => {
                          return (
                            <span key={index}>
                              {yyyymmddFormate(item.medicalIssueDate)}
                            </span>
                          );
                        })}
                      {showPartnerForm === true && (
                        <Form.Item
                          name="medical_issue_date"
                          className="profile-form"
                        >
                          <DatePicker />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">XRay Date:</span>
                    <div className="w40-40">
                      {showPartnerForm === false &&
                        partnerDetail &&
                        partnerDetail.medicals &&
                        partnerDetail.medicals.map((item, index) => {
                          return (
                            <span key={index}>
                              {yyyymmddFormate(item.xrayIssueDate)}
                            </span>
                          );
                        })}
                      {showPartnerForm === true && (
                        <Form.Item name="xray_date" className="profile-form">
                          <DatePicker />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mar-top d-flex flex-end submit-access-btn">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button mr-24"
              >
                Submit
            </Button>
              <Button
                type="primary"
                className="login-form-button"
                onClick={() => setShowPartnerForm(!showPartnerForm)}
              >
                Access For Edit
            </Button>
            </div>
          </div>
        </Form>
      </Spin>
    </Fragment>
  );
};

export default PartnerVisaDetail;
