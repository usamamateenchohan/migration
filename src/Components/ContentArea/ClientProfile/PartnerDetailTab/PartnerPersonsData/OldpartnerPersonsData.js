import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Form, Input, Select, DatePicker, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import { yyyymmddFormate } from "../../../../Common/reUseFunctions";
import { partnerCountryList } from "../../../../../statics/data/PartnerData/partnerCountryList";
import { partnerVisaType } from "../../../../../statics/data/PartnerData/partnerVisaType";

const PartnerPersonInformation = ({
  onGetPartnerDetail,
  partnerDetail,
  onUpdateClientProfileMember,
  onUpdateClientEmail,
  onClientProfileSaveAddress,
  onUpdateClientPhone,
  onUpdateClientPassport,
  onUpdateClientMedical,
}) => {
  const [form] = Form.useForm();
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
      first_name: partnerDetail && partnerDetail.firstName,
      middle_name: partnerDetail && partnerDetail.middleName,
      last_name: partnerDetail && partnerDetail.lastName,
      email:
        partnerDetail &&
        partnerDetail.emails &&
        partnerDetail.emails.length > 0 &&
        partnerDetail.emails[0].address,
      address:
        partnerDetail &&
        partnerDetail.addresses &&
        partnerDetail.addresses.map((item) => {
          return item.city;
        }),
      mobile_phone:
        partnerDetail &&
        partnerDetail.phones &&
        partnerDetail.phones[4] &&
        partnerDetail.phones[4].contact,
      overseas_mobile:
        partnerDetail &&
        partnerDetail.phones &&
        partnerDetail.phones[2] &&
        partnerDetail.phones[2].contact,
      land_line:
        partnerDetail &&
        partnerDetail.phones &&
        partnerDetail.phones[1] &&
        partnerDetail.phones[1].contact,
      other_contact_information:
        partnerDetail &&
        partnerDetail.phones &&
        partnerDetail.phones[0] &&
        partnerDetail.phones[0].contact,
      notes: partnerDetail && partnerDetail.notes,
      passport_number:
        partnerDetail &&
        partnerDetail.passports.length > 0 &&
        partnerDetail.passports[0].passportNo,
      country_of_issue:
        partnerDetail &&
        partnerDetail.passports &&
        partnerDetail.passports.map((item, index) => {
          return <span key={index}>{item.passportCountry}</span>;
        }),
      passport_issue_date:
        partnerDetail &&
        partnerDetail.passports &&
        new moment(partnerDetail.passports.passportIssueDate),
      passport_expiry_date:
        partnerDetail &&
        partnerDetail.passports &&
        new moment(partnerDetail.passports.passportExpiryDate),
      current_visa_type: partnerDetail && partnerDetail.currentVisaTypeId,
      current_new_zeland_visa_expiry_date:
        partnerDetail &&
        partnerDetail.passports &&
        new moment(partnerDetail.passports.currentNewZealandVisaExpiry),
      medical_issue_date:
        partnerDetail &&
        new moment(
          partnerDetail &&
            partnerDetail.medicals &&
            partnerDetail.medicals.medicalIssueDate
        ),
      xray_date:
        partnerDetail &&
        new moment(
          partnerDetail &&
            partnerDetail.medicals &&
            partnerDetail.medicals.xrayIssueDate
        ),
    });
  }, [partnerDetail]);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    debugger;
    const data = {
      id: partnerDetail && partnerDetail.id,
      branchId: partnerDetail && partnerDetail.branchId,
      clientNumber: "string",
      familyId: partnerDetail && partnerDetail.familyId,
      processingGroupId: 0,
      agentId: partnerDetail && partnerDetail.agentId,
      clientTag: 0,
      firstName: values && values.first_name,
      lastName: values && values.last_name,
      middleName: values && values.middle_name,
      title: "string",
      gender: 0,
      dateOfBirth: "2020-12-10T13:21:23.318Z",
      maritalStatus: "string",
      dependentChildren: 0,
      notes: values && values.notes,
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
      currentVisaTypeId: 0,
      currentNewZealandVisaExpiry:
        values && values.current_new_zeland_visa_expiry_date,
      travelConditionsValidTo: "2020-12-10T13:21:23.318Z",
      visaText: "string",
      visaDenied: true,
      deniedText: "string",
      clientNumberIZM: "string",
      inzFeeDate: "2020-12-10T13:21:23.318Z",
      memberType: "spouse",
      clientId: partnerDetail && partnerDetail.clientId,
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
    onUpdateClientProfileMember(data);

    const emailId = partnerDetail && partnerDetail.emails[0].id;
    const clientIdEmial = partnerDetail && partnerDetail.emails[0].clientId;
    const emialTypeId = partnerDetail && partnerDetail.emails[0].emailTypeId;
    const emailModifiedBy = partnerDetail && partnerDetail.emails[0].modifiedBy;

    debugger;
    const partnerEmailData = [
      {
        id: emailId,
        clientId: clientIdEmial,
        address: values.email,
        emailTypeId: emialTypeId,
        modifiedBy: clientIdEmial,
      },
    ];
    debugger;
    onUpdateClientEmail(partnerEmailData);

    const addressId = partnerDetail && partnerDetail.addresses[0].id;
    const clientIdAddress =
      partnerDetail && partnerDetail.addresses[0].clientId;
    const countryAddress = partnerDetail && partnerDetail.addresses[0].country;
    const addressTypeIdData =
      partnerDetail && partnerDetail.addresses[0].addressTypeId;

    debugger;
    const partnerAddressData = [
      {
        id: addressId,
        clientId: clientIdAddress,
        contactPerson: "string",
        flat: "102",
        building: "	Sky Tower",
        streetName: "Street",
        suburb: "Stonefields ",
        streetNumber: "Street",
        city: "California",
        state: "Unitary state",
        zip: "1234",
        country: countryAddress,
        addressTypeId: addressTypeIdData,
        modifiedBy: clientIdAddress,
      },
    ];
    debugger;
    onClientProfileSaveAddress(partnerAddressData);

    const phoneDataId =
      (partnerDetail && partnerDetail.phones[0].id) ||
      (partnerDetail && partnerDetail.phones[1].id) ||
      (partnerDetail && partnerDetail.phones[2].id) ||
      (partnerDetail && partnerDetail.phones[4].id);
    const DataphoneClientId = partnerDetail && partnerDetail.phones[1].clientId;
    const DataphoneTypeId =
      partnerDetail && partnerDetail.phones[1].phoneTypeId;
    const phonemodifiedBy = partnerDetail && partnerDetail.phones[1].modifiedBy;
    debugger;
    const partnerPhoneData = [
      {
        id: phoneDataId,
        clientId: DataphoneClientId,
        contact: values.mobile_phone,
        phoneTypeId: DataphoneTypeId,
        modifiedBy: DataphoneClientId,
      },
    ];
    onUpdateClientPhone(partnerPhoneData);

    debugger;
    const passportId =
      partnerDetail && partnerDetail.passports && partnerDetail.passports[0].id;
    const passportClientId =
      partnerDetail &&
      partnerDetail.passports &&
      partnerDetail.passports[0].clientId;
    const passportModifiedBy =
      partnerDetail &&
      partnerDetail.passports &&
      partnerDetail.passports[0].modifiedBy;
    const partnerPassportData = [
      {
        id: 7,
        clientId: "b8bdf0cf-2ea8-4ee6-bb64-440d6a487ceb",
        passportNo: values.passport_number,
        passportCountry: values.country_Issue,
        passportIssueDate: values.passport_issue_date,
        xpassportExpiryDatex: values.passport_expiry_date,
        modifiedBy: "ce9eb98b-e889-4be2-bff7-2201f03e38ff",
      },
    ];
    debugger;
    onUpdateClientPassport(partnerPassportData);

    debugger;
    const medicalId =
      partnerDetail && partnerDetail.medicals ? partnerDetail.medicals.id : "";
    const medicalClientId =
      partnerDetail && partnerDetail.medicals
        ? partnerDetail.medicals.clientId
        : "";
    const partnerMedicalData = [
      {
        id: medicalId,
        clientId: medicalClientId,
        er: "string",
        medicalIssueDate: "2020-12-09T10:43:57.701Z",
        medicalExpiryDate: "2020-12-09T10:43:57.701Z",
        xxrayIssueDatex: "2020-12-09T10:43:57.701Z",
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
      <Form name="register" onFinish={onFinish} scrollToFirstError form={form}>
        <div className="container client-info-tab information-area-bg padding-tb">
          <div className="client-information-container">
            <div className="align-center mb-30">
              <h2 className="info-heading">PERSONAL INFORMATION</h2>
            </div>
            <div className="align-center">
              <Avatar
                src="https://www.shareicon.net/data/2016/05/26/771187_man_512x512.png"
                size={95}
                icon={<UserOutlined />}
              />
            </div>
            <div className="information-area">
              <ul>
                <li className="d-flex client-information-setting">
                  <span className="w60-per">Client's First Name:</span>
                  <div className="w40-40">
                    {showPartnerForm === false && (
                      <span>{partnerDetail && partnerDetail.firstName}</span>
                    )}
                    {showPartnerForm === true && (
                      <Form.Item
                        className="profile-form"
                        name="first_name"
                        rules={[
                          {
                            required: false,
                            message: "Please input your first name!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </div>
                </li>
                <li className="d-flex client-information-setting">
                  <span className="w60-per">Middle Name:</span>
                  <div className="w40-40">
                    {showPartnerForm === false && (
                      <span>{partnerDetail && partnerDetail.middleName}</span>
                    )}
                    {showPartnerForm === true && (
                      <Form.Item
                        className="profile-form"
                        name="middle_name"
                        rules={[
                          {
                            required: false,
                            message: "Please input your middle name!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </div>
                </li>
                <li className="d-flex client-information-setting">
                  <span className="w60-per">Last Name:</span>
                  <div className="w40-40">
                    {showPartnerForm === false && (
                      <span>{partnerDetail && partnerDetail.lastName}</span>
                    )}
                    {showPartnerForm === true && (
                      <Form.Item
                        className="profile-form"
                        name="last_name"
                        rules={[
                          {
                            required: false,
                            message: "Please input your last name!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </div>
                </li>
                <li className="d-flex client-information-setting">
                  <span className="w60-per">Email:</span>
                  <div className="w40-40">
                    {showPartnerForm === false &&
                      partnerDetail &&
                      partnerDetail.emails &&
                      partnerDetail.emails.map((item, index) => {
                        return <span key={index}>{item.address}</span>;
                      })}
                    {showPartnerForm === true && (
                      <Form.Item
                        className="profile-form"
                        name="email"
                        rules={[
                          {
                            required: false,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </div>
                </li>
                <li className="d-flex client-information-setting">
                  <span className="w60-per">Address:</span>
                  <div className="w40-40">
                    {showPartnerForm === false &&
                      partnerDetail &&
                      partnerDetail.addresses &&
                      partnerDetail.addresses.map((item, index) => {
                        return <span key={index}>{item.city}</span>;
                      })}
                    {showPartnerForm === true && (
                      <Form.Item
                        className="profile-form"
                        name="address"
                        rules={[
                          {
                            required: false,
                            message: "Please input your title!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </div>
                </li>
                <li className="d-flex client-information-setting">
                  <span className="w60-per">Mobile Phone:</span>
                  <div className="w40-40">
                    {showPartnerForm === false &&
                      partnerDetail &&
                      partnerDetail.phones &&
                      partnerDetail.phones.map((item) => {
                        return item.phoneTypeId === 1 && item.contact;
                      })}
                    {showPartnerForm === true && (
                      <Form.Item
                        className="profile-form"
                        name="mobile_phone"
                        rules={[
                          {
                            required: false,
                            message: "Please input your country!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </div>
                </li>

                <li className="d-flex client-information-setting">
                  <span className="w60-per">Overseas Mobile</span>
                  <div className="w40-40">
                    {showPartnerForm === false &&
                      partnerDetail &&
                      partnerDetail.phones &&
                      partnerDetail.phones.map((item) => {
                        return item.phoneTypeId === 3 && item.contact;
                      })}
                    {showPartnerForm === true && (
                      <Form.Item
                        className="profile-form"
                        name="overseas_mobile"
                        rules={[
                          {
                            required: false,
                            message: "Please input your overseas mobile!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </div>
                </li>
                <li className="d-flex client-information-setting">
                  <span className="w60-per">Land Line:</span>
                  <div className="w40-40">
                    {showPartnerForm === false &&
                      partnerDetail &&
                      partnerDetail.phones &&
                      partnerDetail.phones.map((item) => {
                        return item.phoneTypeId === 4 && item.contact;
                      })}
                    {showPartnerForm === true && (
                      <Form.Item
                        className="profile-form"
                        name="land_line"
                        rules={[
                          {
                            required: false,
                            message: "Please input your land line!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </div>
                </li>
                <li className="d-flex client-information-setting">
                  <span className="w60-per">Other Contact Information:</span>
                  <div className="w40-40">
                    {showPartnerForm === false &&
                      partnerDetail &&
                      partnerDetail.phones &&
                      partnerDetail.phones.map((item) => {
                        return item.phoneTypeId === 5 && item.contact;
                      })}
                    {showPartnerForm === true && (
                      <Form.Item
                        className="profile-form"
                        name="other_contact_information"
                        rules={[
                          {
                            required: false,
                            message:
                              "Please input your other contact information!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </div>
                </li>
                <li className="d-flex client-information-setting">
                  <span className="w60-per">Notes:</span>
                  <div className="w40-40">
                    {showPartnerForm === false && (
                      <span>{partnerDetail && partnerDetail.notes}</span>
                    )}
                    {showPartnerForm === true && (
                      <Form.Item
                        className="profile-form"
                        name="notes"
                        rules={[
                          {
                            required: false,
                            message: "Please input your notes!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

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
                          {partnerCountryList.map((item, index) => (
                            <Option key={index} value={item.code}>
                              {item.name}
                            </Option>
                          ))}
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
        </div>

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
                          {partnerVisaType.map((item, index) => (
                            <Option key={index} value={item.code}>
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
        </div>

        <div className="mar-top d-flex flex-end">
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
      </Form>
    </Fragment>
  );
};

export default PartnerPersonInformation;
