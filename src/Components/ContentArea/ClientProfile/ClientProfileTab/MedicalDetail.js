import React, { Fragment, useState, useEffect } from "react";
import { Form, Input, Select, DatePicker, Button, Spin } from "antd";
import moment from "moment";
import { yyyymmddFormate } from "../../../Common/reUseFunctions";
import { medicialGrading } from "../../../../statics/data/medicialGrading";
import { medicalNotes } from "../../../../statics/data/medicalNotes";

const { Option } = Select;

const MedicalDetail = ({
  onGetClientProfile,
  clientProfile,

  onUpdateClientMedical,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    onGetClientProfile();
  }, [onGetClientProfile]);

  useEffect(() => {
    // Fields Set Form Start //
    const nzerData =
      clientProfile &&
      clientProfile.medicals &&
      clientProfile.medicals[0].er.trim();

    const medicalIssueField =
      clientProfile && clientProfile.medicals && new moment(clientProfile.medicals[0].medicalIssueDate);

    const medicalExpiryField =
      clientProfile && clientProfile.medicals && new moment(clientProfile.medicals[0].medicalExpiryDate);

    const medicalGradingField =
      clientProfile &&
      clientProfile.medicals &&
      clientProfile.medicals[0].medicalGrading;

    const xrayIssueDate =
      clientProfile && clientProfile.medicals && new moment(clientProfile.medicals[0].xrayIssueDate);

    const xrayExpiryDate =
      clientProfile && clientProfile.medicals && new moment(clientProfile.medicals[0].xrayExpiryDate);

    const xrayGradingfield =
      clientProfile &&
      clientProfile.medicals &&
      clientProfile.medicals[0].xrayGrading;

    const medicalNotes =
      clientProfile &&
      clientProfile.medicals &&
      clientProfile.medicals[0].medicalNotes;

    const medicalNotesDetail =
      clientProfile &&
      clientProfile.medicals &&
      clientProfile.medicals[0].medicalNotesDetail.trim();

    form.setFieldsValue({
      nzer: nzerData,
      medical_certificate_issue_date: medicalIssueField,
      medical_certificate_expiry_date: medicalExpiryField,
      medical_grading: medicalGradingField,
      xray_issue_date: xrayIssueDate,
      xray_expiry_date: xrayExpiryDate,
      xray_grading: xrayGradingfield,
      medical_notes: medicalNotes,
      medical_notes_detail: medicalNotesDetail,
    });
  }, [clientProfile]);

  const onFinish = (values) => {
    setLoading(true)
    console.log("Received values of form: ", values);

    const medicalId =
      clientProfile && clientProfile.medicals.length > 0
        ? clientProfile.medicals[0].id
        : 0;
    const medicalClientId =
      clientProfile && clientProfile.medicals.length > 0
        ? clientProfile.medicals[0].clientId
        : clientProfile && clientProfile.id;
    const medicalData = [
      {
        id: medicalId,
        clientId: medicalClientId,
        er: values.nzer,
        medicalIssueDate: values.medical_certificate_issue_date,
        medicalExpiryDate: values.medical_certificate_expiry_date,
        xrayIssueDate: values.xray_issue_date,
        xrayExpiryDate: values.xray_expiry_date,
        medicalGrading: values.medical_grading,
        xrayGrading: values.xray_grading,
        medicalNotes: values.medical_notes,
        medicalNotesDetail: values.medical_notes_detail,
        modifiedBy: medicalClientId,
      },
    ];
    debugger
    onUpdateClientMedical(medicalData).then(() => {
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
                <h1 className="info-heading">MEDICAL DETAIL</h1>
              </div>
              <div className="information-area">
                <ul>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">NZER:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.medicals &&
                        clientProfile.medicals.map((item, index) => {
                          return <span key={index}>{item.er}</span>;
                        })}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="nzer"
                          rules={[
                            {
                              required: false,
                              message: "Please input your NZER!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">
                      Medical Certificate Issue Date:
                  </span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.medicals &&
                        clientProfile.medicals.map((item, index) => {
                          return (
                            <span key={index}>
                              {yyyymmddFormate(item.medicalIssueDate)}
                            </span>
                          );
                        })}
                      {showForm === true && (
                        <Form.Item
                          name="medical_certificate_issue_date"
                          className="profile-form"
                        >
                          <DatePicker />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">
                      Medical Certificate Expiry Date:
                  </span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.medicals &&
                        clientProfile.medicals.map((item, index) => {
                          return (
                            <span key={index}>
                              {yyyymmddFormate(item.medicalExpiryDate)}
                            </span>
                          );
                        })}
                      {showForm === true && (
                        <Form.Item
                          name="medical_certificate_expiry_date"
                          className="profile-form"
                        >
                          <DatePicker />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Medical Grading:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.medicals &&
                        clientProfile.medicals.map((item, index) => {
                          return <span key={index}>{item.medicalGrading}</span>;
                        })}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="medical_grading"
                          rules={[
                            {
                              required: false,
                              message: "Please input your medical grading!",
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
                            {medicialGrading.map((item, index) => (
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
                    <span className="w60-per">Xray Issue Date:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.medicals &&
                        clientProfile.medicals.map((item, index) => {
                          return (
                            <span key={index}>
                              {yyyymmddFormate(item.xrayIssueDate)}
                            </span>
                          );
                        })}
                      {showForm === true && (
                        <Form.Item
                          name="xray_issue_date"
                          className="profile-form"
                        >
                          <DatePicker />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Xray Expiry Date:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.medicals &&
                        clientProfile.medicals.map((item, index) => {
                          return (
                            <span key={index}>
                              {yyyymmddFormate(item.xrayExpiryDate)}
                            </span>
                          );
                        })}
                      {showForm === true && (
                        <Form.Item
                          name="xray_expiry_date"
                          className="profile-form"
                        >
                          <DatePicker />
                        </Form.Item>
                      )}
                    </div>
                  </li>
                  <li className="d-flex client-information-setting">
                    <span className="w60-per">Xray Grading:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.medicals &&
                        clientProfile.medicals.map((item, index) => {
                          return <span key={index}>{item.xrayGrading}</span>;
                        })}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="xray_grading"
                          rules={[
                            {
                              required: false,
                              message: "Please input your xray grading!",
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
                            {medicialGrading.map((item, index) => (
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
                    <span className="w60-per">Medical Notes:</span>
                    <div className="w40-40">
                      {showForm === false &&
                        clientProfile &&
                        clientProfile.medicals &&
                        clientProfile.medicals.map((item, index) => {
                          return <span key={index}>{item.medicalNotes}</span>;
                        })}
                      {showForm === true && (
                        <Form.Item
                          className="profile-form"
                          name="medical_notes"
                          rules={[
                            {
                              required: false,
                              message: "Please input your medical notes!",
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
                            {medicalNotes.map((item, index) => (
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
                    <span className="w60-per">Medical Notes Detail:</span>
                    {showForm === false &&
                      clientProfile &&
                      clientProfile.medicals &&
                      clientProfile.medicals.map((item, index) => {
                        return <span key={index}>{item.medicalNotesDetail}</span>;
                      })}
                    <div className="w40-40">
                      {showForm === true && (
                        <Form.Item
                          className="last-text-area"
                          name="medical_notes_detail"
                        >
                          <Input.TextArea />
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

export default MedicalDetail;
