import React, { Fragment, useState, useEffect } from "react";
import { Form, Select, DatePicker, Button, Spin } from "antd";
import moment from "moment";
import { yyyymmddFormate } from "./../../../Common/reUseFunctions";
import { visaType } from "./../../../../statics/data/visaType";

const { Option } = Select;

const VisaDetail = ({
  onGetClientProfile,
  clientProfile,
  onaddClientProfile,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    onGetClientProfile();
  }, [onGetClientProfile]);

  useEffect(() => {
    // Fields Set Form Start //

    form.setFieldsValue({
      current_visa_type: clientProfile && clientProfile.currentVisaTypeId,
      current_newzeland_visa_expiry:
        clientProfile && new moment(clientProfile.currentNewZealandVisaExpiry),
    });
  }, [clientProfile]);

  const onFinish = (values) => {
    setLoading(true)
    console.log("Received values of form: ", values);

    const data = {
      id: clientProfile && clientProfile.id,
      branchId: clientProfile && clientProfile.branchId,
      clientNumber: "string",
      familyId: 0,
      processingGroupId: 0,
      agentId: clientProfile && clientProfile.agentId,
      clientTag: 0,
      firstName: clientProfile && clientProfile.firstName,
      lastName: clientProfile && clientProfile.lastName,
      middleName: clientProfile && clientProfile.middleName,
      title: clientProfile && clientProfile.title,
      gender: 0,
      dateOfBirth: clientProfile && clientProfile.dateOfBirth,
      maritalStatus: "string",
      dependentChildren: 0,
      notes: "string",
      occupation: clientProfile && clientProfile.occupation,
      occupationOrganization: clientProfile && clientProfile.occupationOrganization,
      inzUserName: "string",
      inzPassword: "string",
      imageBlobUrl: "string",
      nationalityId: "string",
      nationalityCountry: 0,
      skypeID: "string",
      preferredName: clientProfile && clientProfile.preferredName,
      isSubscribed: true,
      arbitaryJson: "string",
      dependentClientIds: "string",
      modifiedBy: clientProfile && clientProfile.modifiedBy,
      currentVisaTypeId: values.current_visa_type,
      currentNewZealandVisaExpiry: values.current_newzeland_visa_expiry,
      travelConditionsValidTo:
        clientProfile && clientProfile.travelConditionsValidTo,
      visaText: clientProfile && clientProfile.visaText,
      visaDenied: clientProfile && clientProfile.visaDenied,
      deniedText: clientProfile && clientProfile.deniedText,
      clientNumberIZM: "string",
      inzFeeDate: clientProfile && clientProfile.inzFeeDate,
      memberType: "string",
      clientId: clientProfile && clientProfile.clientId,
      nzqaOnlineSubDate: "2020-12-09T13:18:22.542Z",
      nzqaDocumentSubDate: "2020-12-09T13:18:22.542Z",
      nzqaDocumentRetDate: "2020-12-09T13:18:22.542Z",
      visaCountryId: clientProfile && clientProfile.visaCountryId,
      visaCountyType: clientProfile && clientProfile.visaCountyType,
      age: clientProfile && clientProfile.age,
      jobSectorId: clientProfile && clientProfile.jobSectorId,
      sourceId: clientProfile && clientProfile.sourceId,
      sourceDescription: "string",
      clientSerial: "string",
      companyOptional: "string",
      dealWorth: "string",
      saleDate: clientProfile && clientProfile.saleDate,
      clientPermission: {
        signed: true,
        onshore: true,
        active: true,
        allowUpdate: true,
        areaAccess: true,
      },
    };

    onaddClientProfile(data).then(() => {
      onGetClientProfile();
      setLoading(false)
    })
  };

  console.log("clientProfile 123123 ", clientProfile);
  return (
    <Fragment>
      <Spin size="large" spinning={loading}>
        <Form name="register" onFinish={onFinish} scrollToFirstError form={form}>
          <div className="container client-info-tab information-area-bg mar-top padding-tb">
            <div className="client-information-container">
              <div className="align-center">
                <h1 className="info-heading">VISA DETAIL (IF KNOWN)</h1>
              </div>
              <div className="information-area">
                <ul>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Current Visa Type:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile && clientProfile.currentVisaTypeId}
                        </span>
                      )}
                      {showForm === true && (
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
                      Current New Zeland Visa Expiry
                    <br /> Date:
                  </span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile &&
                            yyyymmddFormate(
                              clientProfile.currentNewZealandVisaExpiry
                            )}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          name="current_newzeland_visa_expiry"
                          className="profile-form"
                        >
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
                onClick={() => setShowForm(!showForm)}
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

export default VisaDetail;
