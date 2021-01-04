import React, { Fragment, useState, useEffect } from "react";
import { Avatar, Form, Input, Select, DatePicker, Button, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import { yyyymmddFormate } from "./../../../Common/reUseFunctions";

const { Option } = Select;

const PersonalInformation = ({
  onGetClientProfile,
  clientProfile,
  onaddClientProfile,
  onUpdateClientEmail,
  onClientProfileSaveAddress,
  onUpdateClientPhone,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    onGetClientProfile();
  }, [onGetClientProfile]);

  useEffect(() => {
    // Fields Set Form Start //
    const emailDataAddress =
      clientProfile &&
      clientProfile.emails[0] &&
      clientProfile.emails[0].address;

    const clientDob = clientProfile && new moment(clientProfile.dateOfBirth);

    const addressType =
      clientProfile && clientProfile.addresses[0]
        ? clientProfile.addresses[0].streetName
        : "";

    form.setFieldsValue({
      title: clientProfile && clientProfile.title,
      first_name: clientProfile && clientProfile.firstName,
      middle_name: clientProfile && clientProfile.middleName,
      last_name: clientProfile && clientProfile.lastName,
      other_name: clientProfile && clientProfile.preferredName,
      gender: clientProfile && clientProfile.gender,
      email: emailDataAddress,
      client_dob: clientDob,
      address: addressType,
      mobile_phone:
        clientProfile &&
        clientProfile.phones[0] &&
        clientProfile.phones[0].contact.trim(),
      secondary_mobile:
        clientProfile &&
        clientProfile.phones[1] &&
        clientProfile.phones[1].contact.trim(),
      overseas_mobile:
        clientProfile &&
        clientProfile.phones[2] &&
        clientProfile.phones[2].contact.trim(),
      land_line:
        clientProfile &&
        clientProfile.phones[3] &&
        clientProfile.phones[3].contact.trim(),
      other_contact_information:
        clientProfile &&
        clientProfile.phones[4] &&
        clientProfile.phones[4].contact.trim(),

      material_status: clientProfile && clientProfile.maritalStatus,
      dependent_children: clientProfile && clientProfile.dependentChildren,
      occupation: clientProfile && clientProfile.occupation,
      company: clientProfile && clientProfile.occupationOrganization,
    });
  }, [clientProfile]);

  const onFinish = (values) => {
    setLoading(true);
    // Personal Information Start //
    const numberOfChieldren = parseInt(values.dependent_children);
    const data = {
      id: clientProfile && clientProfile.id,
      branchId: clientProfile && clientProfile.branchId,
      clientNumber: "string",
      familyId: 0,
      processingGroupId: 0,
      agentId: clientProfile && clientProfile.agentId,
      clientTag: 0,
      firstName: values.first_name,
      lastName: values.last_name,
      middleName: values.middle_name,
      title: values.title,
      gender: values.gender,
      dateOfBirth: values.client_dob,
      maritalStatus: values.material_status,
      dependentChildren: numberOfChieldren,
      notes: "string",
      occupation: values.occupation,
      occupationOrganization: values.company,
      inzUserName: "string",
      inzPassword: "string",
      imageBlobUrl: "string",
      nationalityId: "string",
      nationalityCountry: 0,
      skypeID: "string",
      preferredName: values.other_name,
      isSubscribed: true,
      arbitaryJson: "string",
      dependentClientIds: "string",
      modifiedBy: clientProfile && clientProfile.clientId,
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
      setLoading(false);
    });
    // Personal Information End //

    console.log("Received values of form: ", values);

    const addressId =
      clientProfile && clientProfile.addresses.length > 0
        ? clientProfile.addresses[0].id
        : 0;
    const clientIdAddress =
      clientProfile && clientProfile.addresses.length > 0
        ? clientProfile.addresses[0].clientId
        : clientProfile && clientProfile.id;
    const addressTypeIdData =
      clientProfile && clientProfile.addresses.length > 0
        ? clientProfile.addresses[0].addressTypeId
        : 0;
    const addressData = [
      {
        id: addressId,
        clientId: clientIdAddress,
        contactPerson: "string",
        flat: "string",
        building: "string",
        streetName: values
          ? values.address
          : clientProfile &&
            clientProfile.addresses.length > 0 &&
            clientProfile.addresses[0].streetName,
        suburb: "string",
        streetNumber: "string",
        city: "string",
        state: "string",
        zip: "string",
        country: 0,
        addressTypeId: 0,
        modifiedBy: clientIdAddress,
      },
    ];
    onClientProfileSaveAddress(addressData);

    const DataphoneClientId =
      clientProfile && clientProfile.phones[0]
        ? clientProfile.phones[0].clientId
        : clientProfile.id;
    const phonemodifiedBy =
      clientProfile && clientProfile.phones[0]
        ? clientProfile.phones[0].modifiedBy
        : clientProfile.modifiedBy;
    const phoneData = [
      {
        id:
          clientProfile &&
          clientProfile.phones[0] &&
          clientProfile.phones[0].id,
        clientId: DataphoneClientId,
        contact: values.mobile_phone,
        phoneTypeId: 1,
        modifiedBy: phonemodifiedBy,
      },
      {
        id:
          clientProfile &&
          clientProfile.phones[1] &&
          clientProfile.phones[1].id,
        clientId: DataphoneClientId,
        contact: values.secondary_mobile,
        phoneTypeId: 2,
        modifiedBy: phonemodifiedBy,
      },
      {
        id:
          clientProfile &&
          clientProfile.phones[2] &&
          clientProfile.phones[2].id,
        clientId: DataphoneClientId,
        contact: values.overseas_mobile,
        phoneTypeId: 3,
        modifiedBy: phonemodifiedBy,
      },
      {
        id:
          clientProfile &&
          clientProfile.phones[3] &&
          clientProfile.phones[3].id,
        clientId: DataphoneClientId,
        contact: values.land_line,
        phoneTypeId: 4,
        modifiedBy: phonemodifiedBy,
      },
      {
        id:
          clientProfile &&
          clientProfile.phones[4] &&
          clientProfile.phones[4].id,
        clientId: DataphoneClientId,
        contact: values.other_contact_information,
        phoneTypeId: 5,
        modifiedBy: phonemodifiedBy,
      },
    ];
    onUpdateClientPhone(phoneData);

    const emailId =
      clientProfile && clientProfile.emails[0] && clientProfile.emails[0].id;
    const clientIdEmial =
      clientProfile &&
      clientProfile.emails[0] &&
      clientProfile.emails[0].clientId;
    const emialTypeId =
      clientProfile &&
      clientProfile.emails[0] &&
      clientProfile.emails[0].emailTypeId;
    const emailModifiedBy =
      clientProfile &&
      clientProfile.emails[0] &&
      clientProfile.emails[0].modifiedBy;

    const emailData = [
      {
        id: emailId,
        clientId: clientIdEmial,
        address: values.email,
        emailTypeId: emialTypeId,
        modifiedBy: emailModifiedBy,
      },
    ];

    onUpdateClientEmail(emailData);
  };

  console.log("clientProfile 123123 ", clientProfile);
  return (
    <Fragment>
      <Spin size="large" spinning={loading}>
        <Form
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          form={form}
        >
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
                    <span className="w60-per">Title:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>{clientProfile && clientProfile.title}</span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="title"
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
                    <span className="w60-per">Client's First Name:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>{clientProfile && clientProfile.firstName}</span>
                      )}
                      {showForm === true && (
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
                      {showForm === false && (
                        <span>{clientProfile && clientProfile.middleName}</span>
                      )}
                      {showForm === true && (
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
                      {showForm === false && (
                        <span>{clientProfile && clientProfile.lastName}</span>
                      )}
                      {showForm === true && (
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
                    <span className="w60-per">Other Name:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile && clientProfile.preferredName}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="other_name"
                          rules={[
                            {
                              required: false,
                              message: "Please input your other name!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Gender:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile && clientProfile.gender === 1
                            ? "Male"
                            : "Female"}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="gender"
                          rules={[
                            {
                              required: false,
                              message: "Please select your gender!",
                            },
                          ]}
                        >
                          <Select>
                            <Option value={1}>Male</Option>
                            <Option value={2}>Female</Option>
                          </Select>
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Email:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile &&
                            clientProfile.emails.map((item) => item.address)}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="email"
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
                    <span className="w60-per">Date of Birth:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile &&
                            yyyymmddFormate(clientProfile.dateOfBirth)}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item name="client_dob" className="profile-form">
                          <DatePicker />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Address:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile &&
                            clientProfile.addresses.map((address) => {
                              return address.streetName;
                            })}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="address"
                          rules={[
                            {
                              required: false,
                              message: "Please input your Address!",
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
                      {showForm === false && (
                        <span>
                          {clientProfile &&
                            clientProfile.phones.map((item) => {
                              return item.phoneTypeId === 1 && item.contact;
                            })}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="mobile_phone"
                          rules={[
                            {
                              required: false,
                              message: "Please input your mobile_phone!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Secondary Mobile:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile &&
                            clientProfile.phones.map((item) => {
                              return item.phoneTypeId === 2 && item.contact;
                            })}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="secondary_mobile"
                          rules={[
                            {
                              required: false,
                              message: "Please input your secondary mobile!",
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
                      {showForm === false && (
                        <span>
                          {clientProfile &&
                            clientProfile.phones.map((item) => {
                              return item.phoneTypeId === 3 && item.contact;
                            })}
                        </span>
                      )}
                      {showForm === true && (
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
                      {showForm === false && (
                        <span>
                          {clientProfile &&
                            clientProfile.phones.map((item) => {
                              return item.phoneTypeId === 4 && item.contact;
                            })}
                        </span>
                      )}
                      {showForm === true && (
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
                      {showForm === false && (
                        <span>
                          {clientProfile &&
                            clientProfile.phones.map((item) => {
                              return item.phoneTypeId === 5 && item.contact;
                            })}
                        </span>
                      )}
                      {showForm === true && (
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
                    <span className="w60-per">Marital Status:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile && clientProfile.maritalStatus}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="material_status"
                          rules={[
                            {
                              required: false,
                              message:
                                "Please input your other contact information!",
                            },
                          ]}
                        >
                          <Select>
                            <Option value="married">Married</Option>
                            <Option value="unmarried">UnMarried</Option>
                          </Select>
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">
                      Number of dependent children:
                    </span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile && clientProfile.dependentChildren}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="dependent_children"
                          rules={[
                            {
                              required: false,
                              message:
                                "Please input your number of dependent children!",
                            },
                          ]}
                        >
                          <Input type="number" />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Occupation:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>{clientProfile && clientProfile.occupation}</span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="occupation"
                          rules={[
                            {
                              required: false,
                              message: "Please input your Occupation!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Company:</span>
                    <div className="w40-40">
                      {showForm === false && (
                        <span>
                          {clientProfile &&
                            clientProfile.occupationOrganization}
                        </span>
                      )}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="company"
                          rules={[
                            {
                              required: false,
                              message: "Please input your Company!",
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

export default PersonalInformation;
