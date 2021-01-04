import React, { Fragment, useState, useEffect } from "react";
import { Form, Input, Select, DatePicker, Button, Spin } from "antd";
import moment from "moment";
import { yyyymmddFormate } from "./../../../Common/reUseFunctions";

const { Option } = Select;

const SecondPassportDetail = ({
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

    form.setFieldsValue({
      second_passport_number:
        clientProfile &&
        clientProfile.passports[1] &&
        clientProfile.passports[1].passportNo,
      second_country_of_issue:
        clientProfile &&
        clientProfile.passports[1] &&
        clientProfile.passports[1].passportCountry,
      second_passport_issue_date:
        clientProfile &&
        clientProfile.passports[1] &&
        new moment(clientProfile.passports[1].passportIssueDate),
      second_passport_expiry_date:
        clientProfile &&
        clientProfile.passports[1] &&
        new moment(clientProfile.passports[1].passportExpiryDate),
    });
  }, [clientProfile]);

  const onFinish = (values) => {
    setLoading(true)
    debugger;
    console.log("Received values of form: ", values);

    const passportId =
      clientProfile && clientProfile.passports && clientProfile.passports.length > 0 ? clientProfile.passports[1].id : 0;
    const passportClientId =
      clientProfile &&
        clientProfile.passports &&
        clientProfile.passports.length > 0 ?
        clientProfile.passports[1].clientId :
        clientProfile.id;
    const passportModifiedBy =
      clientProfile &&
        clientProfile.passports &&
        clientProfile.passports.length > 0 ?
        clientProfile.passports[1].modifiedBy :
        clientProfile.modifiedBy;
    const passportData = [
      {
        id: passportId,
        clientId: passportClientId,
        passportNo: values.second_passport_number,
        passportCountry: values && values.second_country_of_issue,
        passportIssueDate: values.second_passport_issue_date,
        passportExpiryDate: values.second_passport_expiry_date,
        modifiedBy: passportModifiedBy,
      },
    ];
    onUpdateClientPassport(passportData).then(() => {
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
                <h1 className="info-heading">
                  SECOND PASSPORT DETAIL (IF CLIENT IS DUAL NATIONAL)
              </h1>
              </div>
              <div className="information-area">
                <ul>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Second Passport Number:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.passports[1] &&
                        clientProfile.passports[1].passportNo}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="second_passport_number"
                          rules={[
                            {
                              required: false,
                              message:
                                "Please input your second passport number!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Second Country Of Issue:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.passports[1] &&
                        clientProfile.passports[1].passportCountry}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="second_country_of_issue"
                          rules={[
                            {
                              required: false,
                              message:
                                "Please input your select second country of issue!",
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
                    <span className="w60-per">Second Passport Issue Date:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.passports[1] &&
                        yyyymmddFormate(
                          clientProfile.passports[1].passportIssueDate
                        )}
                      {showForm === true && (
                        <Form.Item
                          name="second_passport_issue_date"
                          className="profile-form"
                        >
                          <DatePicker />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Second Passport Expiry Date:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.passports[1] &&
                        yyyymmddFormate(
                          clientProfile.passports[1].passportExpiryDate
                        )}
                      {showForm === true && (
                        <Form.Item
                          name="second_passport_expiry_date"
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

export default SecondPassportDetail;
