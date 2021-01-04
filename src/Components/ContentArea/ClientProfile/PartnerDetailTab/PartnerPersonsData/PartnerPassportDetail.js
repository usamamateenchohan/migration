import React, { Fragment, useState, useEffect } from "react";
import { Form, Input, Select, DatePicker, Button, Spin } from "antd";
import moment from "moment";
import { yyyymmddFormate } from "../../../../Common/reUseFunctions";

const { Option } = Select;

const PartnerPassportDetail = ({
  onGetPartnerDetail,
  partnerDetail,
  onUpdateClientPassport,

  getAllCountriesRes,
  onGetAllCountriesData,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(true);
  const [selectedContry, setSelectedContry] = useState([]);

  useEffect(() => {
    onGetPartnerDetail();
    onGetAllCountriesData();
  }, [onGetPartnerDetail, onGetAllCountriesData]);

  useEffect(() => {
    // const passportIssueDateData =
    // partnerDetail &&
    // partnerDetail.passports.map((item) => {
    //   return new moment(item.passportIssueDate);
    // });
    form.setFieldsValue({
      passport_number:
        partnerDetail &&
          partnerDetail.passports.length > 0 ?
          partnerDetail.passports[0].passportNo : "",
      country_of_issue:
        partnerDetail &&
        partnerDetail.passports[0] &&
        partnerDetail.passports[0].passportCountry,
      passport_issue_date:
        partnerDetail &&
        partnerDetail.passports &&
        new moment(partnerDetail.passports[0].passportIssueDate),
      passport_expiry_date:
        partnerDetail &&
        partnerDetail.passports &&
        new moment(partnerDetail.passports[0].passportExpiryDate),
    });
  }, [partnerDetail]);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setLoading(true)
    debugger;
    const partnerPassportData = [
      {
        id: partnerDetail && partnerDetail.passports.length > 0 ? partnerDetail.passports[0].id : 0,
        clientId: partnerDetail && partnerDetail.passports.length > 0 ? partnerDetail.passports[0].clientId : partnerDetail.clientId,
        passportNo: values.passport_number,
        passportCountry: values && values.country_of_issue,
        passportIssueDate: values.passport_issue_date,
        passportExpiryDate: values.passport_expiry_date,
        modifiedBy: partnerDetail && partnerDetail.modifiedBy.length > 0 ? partnerDetail.modifiedBy[0].id : partnerDetail.modifiedBy,
      },
    ];
    debugger;
    onUpdateClientPassport(partnerPassportData).then(() => {
      onGetPartnerDetail();
      setLoading(false)
    })
  };


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
                <h2 className="info-heading">PARTNER'S PASSPORT DETAIL</h2>
              </div>

              <div className="information-area">
                <ul>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Passport Number:</span>
                    <div className="w40-40">
                      {showPartnerForm === false &&
                        partnerDetail &&
                        partnerDetail.passports &&
                        partnerDetail.passports.map((item, index) => {
                          return <span key={index}>{item.passportNo}</span>;
                        })}
                      {showPartnerForm === true && (
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
                      {showPartnerForm === false &&
                        partnerDetail &&
                        partnerDetail.passports &&
                        partnerDetail.passports.map((item, index) => {
                          return <span key={index}>{item.passportCountry}</span>;
                        })}
                      {showPartnerForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="country_of_issue"
                          rules={[
                            {
                              required: false,
                              message: "Please input your select gender!",
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
                      {showPartnerForm === false &&
                        partnerDetail &&
                        partnerDetail.passports &&
                        partnerDetail.passports.map((item, index) => {
                          return (
                            <span key={index}>
                              {yyyymmddFormate(item.passportIssueDate)}
                            </span>
                          );
                        })}
                      {showPartnerForm === true && (
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
                      {showPartnerForm === false &&
                        partnerDetail &&
                        partnerDetail.passports &&
                        partnerDetail.passports.map((item, index) => {
                          return (
                            <span key={index}>
                              {yyyymmddFormate(item.passportExpiryDate)}
                            </span>
                          );
                        })}
                      {showPartnerForm === true && (
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

export default PartnerPassportDetail;
