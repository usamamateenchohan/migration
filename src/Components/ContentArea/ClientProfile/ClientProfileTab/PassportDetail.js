import React, { Fragment, useState, useEffect } from "react";
import { Form, Input, Select, DatePicker, Button, Spin } from "antd";
import moment from "moment";
import { yyyymmddFormate } from "./../../../Common/reUseFunctions";

const { Option } = Select;

const PassportDetail = ({
  onGetClientProfile,
  clientProfile,
  onUpdateClientPassport,

  getAllCountriesRes,
  onGetAllCountriesData,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    onGetClientProfile();
    onGetAllCountriesData();
  }, [onGetClientProfile, onGetAllCountriesData]);

  useEffect(() => {
    // Fields Set Form Start //
    const passportCountryData =
      clientProfile &&
      clientProfile.passports[0] &&
      clientProfile.passports[0].passportCountry;
    form.setFieldsValue({
      passport_number:
        clientProfile &&
        clientProfile.passports[0] &&
        clientProfile.passports[0].passportNo,
      country_Issue: passportCountryData,
      passport_issue_date:
        clientProfile &&
        clientProfile.passports[0] &&
        new moment(clientProfile.passports[0].passportIssueDate),
      passport_expiry_date:
        clientProfile &&
        clientProfile.passports[0] &&
        new moment(clientProfile.passports[0].passportExpiryDate),
    });
  }, [clientProfile]);

  const onFinish = (values) => {
    setLoading(true)
    console.log("Received values of form: ", values);

    const passportId =
      clientProfile && clientProfile.passports && clientProfile.passports.length > 0 ? clientProfile.passports[0].id : 0;
    const passportClientId =
      clientProfile &&
        clientProfile.passports &&
        clientProfile.passports.length > 0 ?
        clientProfile.passports[0].clientId :
        clientProfile.id;
    const passportModifiedBy =
      clientProfile &&
        clientProfile.passports &&
        clientProfile.passports.length > 0 ?
        clientProfile.passports[0].modifiedBy :
        clientProfile.modifiedBy;
    const passportData = [
      {
        id: passportId,
        clientId: passportClientId,
        passportNo: values.passport_number,
        passportCountry: values && values.country_Issue,
        passportIssueDate: values.passport_issue_date,
        passportExpiryDate: values.passport_expiry_date,
        modifiedBy: passportModifiedBy,
      },
    ];
    onUpdateClientPassport(passportData).then(() => {
      onGetClientProfile();
      setLoading(false)
    })
  };


  const config = {
    rules: [
      { type: "object", required: false, message: "Please select time!" },
    ],
  };

  console.log("clientProfile 123123 ", clientProfile);
  return (
    <Fragment>
      <Spin size="large" spinning={loading}>
        <Form name="register" onFinish={onFinish} scrollToFirstError form={form}>
          <div className="container client-info-tab information-area-bg mar-top padding-tb">
            <div className="client-information-container">
              <div className="align-center">
                <h2 className="info-heading">PASSPORT DETAIL</h2>
              </div>

              <div className="information-area">
                <ul>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Passport Number:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.passports[0] &&
                        clientProfile.passports[0].passportNo}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="passport_number"
                          rules={[
                            {
                              required: false,
                              message: "Please input your passport number!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Country Of Issue:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.passports[0] &&
                        clientProfile.passports[0].passportCountry}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="country_Issue"
                          rules={[
                            {
                              required: false,
                              message: "Please input your select gender!",
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
                            {
                              getAllCountriesRes && getAllCountriesRes.items && getAllCountriesRes.items.length > 0 &&
                              getAllCountriesRes.items.map((item, index) => (
                                <Option key={index} value={item.id}>
                                  {item.name}
                                </Option>
                              ))
                            }
                          </Select>
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Passport Issue Date:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.passports[0] &&
                        yyyymmddFormate(
                          clientProfile.passports[0].passportIssueDate
                        )}
                      {showForm === true && (
                        <Form.Item
                          name="passport_issue_date"
                          className="profile-form"
                        >
                          <DatePicker />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Passport Expiry Date:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.passports[0] &&
                        yyyymmddFormate(
                          clientProfile.passports[0].passportExpiryDate
                        )}
                      {showForm === true && (
                        <Form.Item
                          name="passport_expiry_date"
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

export default PassportDetail;
