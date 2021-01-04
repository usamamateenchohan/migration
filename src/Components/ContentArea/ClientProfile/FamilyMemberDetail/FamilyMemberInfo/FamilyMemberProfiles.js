import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Form, Input, DatePicker } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { yyyymmddFormate } from "./../../../../Common/reUseFunctions";

const FamilyMemberProfile = ({ memberData }) => {
  const [showMemberForm, setShowMemberForm] = useState(false);

  console.log("memberDatamemberData", memberData);
  return (
    <framgmant>
      <div className="container client-info-tab information-area-bg padding-tb">
        <div className="client-information-container">
          <div className="align-center">
            <h2 className="info-heading">PERSONAL INFORMATION</h2>
          </div>
          <div className="align-center">
            <Avatar size={70} icon={<UserOutlined />} />
          </div>
          <div className="information-area">
            <ul>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Relation:</span>
                <span className="w40-40">
                  {showMemberForm === false && (
                    <span>{memberData && memberData.firstName}</span>
                  )}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="relation"
                      rules={[
                        {
                          required: false,
                          message: "Please input your relation!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Client's First Name:</span>
                <span className="w40-40">
                  {showMemberForm === false && (
                    <span>{memberData && memberData.firstName}</span>
                  )}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="first name"
                      rules={[
                        {
                          required: false,
                          message: "Please input your first name!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Middle Name:</span>
                <span className="w40-40">
                  {showMemberForm === false && (
                    <span>{memberData && memberData.middleName}</span>
                  )}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="middle name"
                      rules={[
                        {
                          required: false,
                          message: "Please input your middle name!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Last Name:</span>
                <span className="w40-40">
                  {showMemberForm === false && (
                    <span>{memberData && memberData.lastName}</span>
                  )}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="last name"
                      rules={[
                        {
                          required: false,
                          message: "Please input your last name!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Email:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.firstName &&
                    memberData.emails.map((item, index) => {
                      return <span key={index}>{item.address}</span>;
                    })}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="email"
                      rules={[
                        {
                          required: false,
                          message: "Please input your email!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Address:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.addresses &&
                    memberData.addresses.map((item, index) => {
                      return <span key={index}>{item.city}</span>;
                    })}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="address"
                      rules={[
                        {
                          required: false,
                          message: "Please input your address!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Mobile Phone:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.phones &&
                    memberData.phones.map((item, index) => {
                      return <span key={index}>{item.contact}</span>;
                    })}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="mobile phone"
                      rules={[
                        {
                          required: false,
                          message: "Please input your mobile phone!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Land Line:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.phones &&
                    memberData.phones.map((item, index) => {
                      return <span key={index}>{item.contact}</span>;
                    })}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="land line"
                      rules={[
                        {
                          required: false,
                          message: "Please input your land line!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Other Contact Information:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.phones &&
                    memberData.phones.map((item, index) => {
                      return <span key={index}>{item.contact}</span>;
                    })}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="contact information"
                      rules={[
                        {
                          required: false,
                          message: "Please input your contact information!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Notes:</span>
                <span className="w40-40">
                  {showMemberForm === false && (
                    <span>{memberData && memberData.notes}</span>
                  )}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="notes"
                      rules={[
                        {
                          required: false,
                          message: "Please input your notes!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container client-info-tab information-area-bg mar-top padding-tb">
        <div className="client-information-container">
          <div className="align-center">
            <h2 className="info-heading">PASSPORT DETAIL</h2>
          </div>

          <div className="information-area">
            <ul>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Passport Number:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.passports &&
                    memberData.passports.map((item, index) => {
                      return <span key={index}>{item.passportNo}</span>;
                    })}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="passport number"
                      rules={[
                        {
                          required: false,
                          message: "Please input your passport number!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Country Of Issue:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.passports &&
                    memberData.passports.map((item, index) => {
                      return <span key={index}>{item.passportCountry}</span>;
                    })}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="country of issue"
                      rules={[
                        {
                          required: false,
                          message: "Please input your country of issue!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Passport Issue Date:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.passports &&
                    memberData.passports.map((item, index) => {
                      return (
                        <span key={index}>
                          {yyyymmddFormate(item.passportIssueDate)}
                        </span>
                      );
                    })}
                  {showMemberForm === true && (
                    <Form.Item name="date-picker" className="profile-form">
                      <DatePicker />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Passport Expiry Date:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.passports &&
                    memberData.passports.map((item, index) => {
                      return (
                        <span key={index}>
                          {yyyymmddFormate(item.passportExpiryDate)}
                        </span>
                      );
                    })}
                  {showMemberForm === true && (
                    <Form.Item name="date-picker" className="profile-form">
                      <DatePicker />
                    </Form.Item>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container client-info-tab information-area-bg mar-top padding-tb">
        <div className="client-information-container">
          <div className="align-center">
            <h1 className="info-heading">VISA DETAILS (IF KNOWN)</h1>
          </div>
          <div className="information-area">
            <ul>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Current Visa Type:</span>
                <span className="w40-40">
                  {showMemberForm === false && (
                    <span>{memberData && memberData.currentVisaTypeId}</span>
                  )}
                  {showMemberForm === true && (
                    <Form.Item
                      className="profile-form"
                      name="current visa type"
                      rules={[
                        {
                          required: false,
                          message: "Please input your current visa type!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">
                  Current New Zeland Visa Expiry Date:
                </span>
                <span className="w40-40">
                  {showMemberForm === false && (
                    <span>
                      {memberData &&
                        yyyymmddFormate(memberData.currentNewZealandVisaExpiry)}
                    </span>
                  )}
                  {showMemberForm === true && (
                    <Form.Item name="date-picker" className="profile-form">
                      <DatePicker />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">Medical Issue Date:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.medicals &&
                    memberData.medicals.map((item, index) => {
                      return (
                        <span key={index}>
                          {yyyymmddFormate(item.medicalIssueDate)}
                        </span>
                      );
                    })}
                  {showMemberForm === true && (
                    <Form.Item name="date-picker" className="profile-form">
                      <DatePicker />
                    </Form.Item>
                  )}
                </span>
              </li>
              <li className="d-flex client-information-setting">
                <span className="w60-per">XRay Date:</span>
                <span className="w40-40">
                  {showMemberForm === false &&
                    memberData &&
                    memberData.medicals &&
                    memberData.medicals.map((item, index) => {
                      return (
                        <span key={index}>
                          {yyyymmddFormate(item.xrayIssueDate)}
                        </span>
                      );
                    })}
                  {showMemberForm === true && (
                    <Form.Item name="date-picker" className="profile-form">
                      <DatePicker />
                    </Form.Item>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mar-top d-flex flex-end">
        <Button type="primary" className="login-form-button save-btn">
          SAVE
        </Button>
        <Button
          type="primary"
          className="login-form-button"
          onClick={() => setShowMemberForm(!showMemberForm)}
        >
          Access For Edit
        </Button>
      </div>
    </framgmant>
  );
};

export default FamilyMemberProfile;
