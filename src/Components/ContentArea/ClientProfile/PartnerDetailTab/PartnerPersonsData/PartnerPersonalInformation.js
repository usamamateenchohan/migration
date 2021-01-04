import React, { Fragment, useState, useEffect } from "react";
import { Avatar, Form, Input, Button, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";

const PartnerPersonalInformation = ({
  onGetPartnerDetail,
  partnerDetail,
  onUpdateClientProfileMember,
  onUpdateClientEmail,
  onClientProfileSaveAddress,
  onUpdateClientPhone,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(true);

  useEffect(() => {
    onGetPartnerDetail();
  }, [onGetPartnerDetail]);

  useEffect(() => {
    form.setFieldsValue({
      first_name: partnerDetail && partnerDetail.firstName,
      middle_name: partnerDetail && partnerDetail.middleName,
      last_name: partnerDetail && partnerDetail.lastName,
      email:
        partnerDetail &&
          partnerDetail.emails &&
          partnerDetail.emails.length > 0 ?
          partnerDetail.emails[0].address : "",
      address:
        partnerDetail &&
        partnerDetail.addresses &&
        partnerDetail.addresses[0] && partnerDetail.addresses[0].streetName,
      mobile_phone:
        partnerDetail &&
        partnerDetail.phones &&
        partnerDetail.phones[0] &&
        partnerDetail.phones[0].contact.trim(),
      overseas_mobile:
        partnerDetail &&
        partnerDetail.phones &&
        partnerDetail.phones[1] &&
        partnerDetail.phones[1].contact.trim(),
      land_line:
        partnerDetail &&
        partnerDetail.phones &&
        partnerDetail.phones[2] &&
        partnerDetail.phones[2].contact.trim(),
      other_contact_information:
        partnerDetail &&
        partnerDetail.phones &&
        partnerDetail.phones[3] &&
        partnerDetail.phones[3].contact,
      notes: partnerDetail && partnerDetail.notes,
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
      currentNewZealandVisaExpiry: partnerDetail && partnerDetail.currentNewZealandVisaExpiry,
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
    onUpdateClientProfileMember(data).then(() => {
      onGetPartnerDetail();
      setLoading(false)
    })

    const emailData = [
      {
        id: partnerDetail && partnerDetail.emails.length > 0 ? partnerDetail.emails[0].id : 0,
        clientId: partnerDetail && partnerDetail.emails.length > 0 ? partnerDetail.emails[0].clientId : partnerDetail.clientId,
        address: values.email,
        emailTypeId: partnerDetail && partnerDetail.emails.length > 0 ? partnerDetail.emails[0].emailTypeId : 0,
        modifiedBy: partnerDetail && partnerDetail.emails.length > 0 ? partnerDetail.emails[0].modifiedBy : partnerDetail.modifiedBy,
      },
    ];
    onUpdateClientEmail(emailData);

    const partnerAddressData = [
      {
        id: partnerDetail && partnerDetail.addresses.length > 0 ? partnerDetail.addresses[0].id : 0,
        clientId: partnerDetail && partnerDetail.addresses.length > 0 ? partnerDetail.addresses[0].clientId : partnerDetail.clientId,
        contactPerson: "string",
        flat: "102",
        building: "	Sky Tower",
        streetName: values.address,
        suburb: "Stonefields ",
        streetNumber: "Street",
        city: "California",
        state: "Unitary state",
        zip: "1234",
        country: 0,
        addressTypeId: partnerDetail && partnerDetail.addresses.length > 0 ? partnerDetail.addresses[0].addressTypeId : 0,
        modifiedBy: partnerDetail && partnerDetail.addresses.length > 0 ? partnerDetail.addresses[0].modifiedBy : partnerDetail.modifiedBy,
      },
    ];
    onClientProfileSaveAddress(partnerAddressData);

    debugger
    const phoneData = [
      {
        id:
          partnerDetail &&
            partnerDetail.phones.length > 0 ?
            partnerDetail.phones[0].id : 0,
        clientId: partnerDetail &&
          partnerDetail.phones.length > 0 ?
          partnerDetail.phones[0].clientId : partnerDetail.clientId,
        contact: values.mobile_phone,
        phoneTypeId: 1,
        modifiedBy: partnerDetail &&
          partnerDetail.phones.length > 0 ?
          partnerDetail.phones[0].modifiedBy : partnerDetail.modifiedBy,
      },
      {
        id:
          partnerDetail &&
            partnerDetail.phones.length > 0 ?
            partnerDetail.phones[1].id : 0,
        clientId: partnerDetail &&
          partnerDetail.phones.length > 0 ?
          partnerDetail.phones[1].clientId : partnerDetail.clientId,
        contact: values.overseas_mobile,
        phoneTypeId: 3,
        modifiedBy: partnerDetail &&
          partnerDetail.phones.length > 0 ?
          partnerDetail.phones[1].modifiedBy : partnerDetail.modifiedBy,
      },

      {
        id:
          partnerDetail &&
            partnerDetail.phones.length > 0 ?
            partnerDetail.phones[2].id : 0,
        clientId: partnerDetail &&
          partnerDetail.phones.length > 0 ?
          partnerDetail.phones[2].clientId : partnerDetail.clientId,
        contact: values.land_line,
        phoneTypeId: 4,
        modifiedBy: partnerDetail &&
          partnerDetail.phones.length > 0 ?
          partnerDetail.phones[2].modifiedBy : partnerDetail.modifiedBy,
      },

      {
        id:
          partnerDetail &&
            partnerDetail.phones.length > 0 ?
            partnerDetail.phones[3].id : 0,
        clientId: partnerDetail &&
          partnerDetail.phones.length > 0 ?
          partnerDetail.phones[3].clientId : partnerDetail.clientId,
        contact: values.other_contact_information,
        phoneTypeId: 5,
        modifiedBy: partnerDetail &&
          partnerDetail.phones.length > 0 ?
          partnerDetail.phones[3].modifiedBy : partnerDetail.modifiedBy,
      },
    ];
    debugger
    onUpdateClientPhone(phoneData);
  };

  console.log("partnerDetailpartnerDetail", partnerDetail);
  return (
    <Fragment>
      <Spin size="large" spinning={loading}>
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

export default PartnerPersonalInformation;
