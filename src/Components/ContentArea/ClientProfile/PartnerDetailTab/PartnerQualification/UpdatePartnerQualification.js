import React, { Fragment, useEffect } from "react";
import { Form, Input, Button, Space, DatePicker } from "antd";
import moment from "moment";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const UpdatePartnerQualification = ({
  clientProfile,
  onGetClientProfile,
  onAddQualificaion,
  onGetPartnerDetail,
  getPartnerQualificationRes,
  onPutQualificationData,

  QualificationData,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    onGetPartnerDetail();
  }, [onGetPartnerDetail]);

  useEffect(() => {
    debugger;
    form.setFieldsValue({
      title: QualificationData && QualificationData.title,
      level: QualificationData && QualificationData.level,
      start_date: QualificationData && new moment(QualificationData.startDate),
      end_date: QualificationData && new moment(QualificationData.endDate),
      institute_name: QualificationData && QualificationData.universityName,
      institute_address:
        QualificationData && QualificationData.universityAddress,
    });
  }, [getPartnerQualificationRes]);
  const onFinish = (values) => {
    debugger;
    console.log("Received values of form:", values);
    debugger;
    const updateData = {
      id: QualificationData && QualificationData.id,
      clientId: QualificationData && QualificationData.clientId,
      schoolId: QualificationData && QualificationData.schoolId,
      title: values.title,
      levelId: QualificationData && QualificationData.levelId,
      startDate: values.startDate,
      endDate: values.end_date,
      universityName: values.institute_name,
      universityAddress: values.institute_address,
      country: 0,
      streetNumber: "string",
      streetName: "string",
      suburb: "string",
      city: "string",
      state: "string",
      zip: "string",
      phone: "string",
      studentID: QualificationData && QualificationData.studentID,
      website: "string",
      qualificationAwarded: true,
      modifiedBy: QualificationData && QualificationData.modifiedBy,
      level: values.level,
    };
    onPutQualificationData(updateData);
  };

  return (
    <Fragment>
      <div className="container client-info-tab employer-form-input">
        <div className="form-container form-container-m">
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            form={form}
            autoComplete="off"
            layout="vertical"
          >
            <div className="forms-styling-tabs">
              <Space
                style={{ display: "block", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[{ required: false, message: "Missing Title" }]}
                >
                  <Input placeholder="Title" />
                </Form.Item>
                <Form.Item
                  name="level"
                  label="Level"
                  rules={[{ required: false, message: "Missing Level" }]}
                >
                  <Input placeholder="Level" />
                </Form.Item>
                <Form.Item
                  name="start_date"
                  label="Start Date"
                  rules={[{ required: false, message: "Missing Start Date" }]}
                >
                  <DatePicker className="w-100 " format={dateFormatList} />
                </Form.Item>
                <Form.Item
                  name="end_date"
                  label="End Date"
                  rules={[{ required: false, message: "Missing End Date" }]}
                >
                  <DatePicker className="w-100 " format={dateFormatList} />
                </Form.Item>
                <Form.Item
                  name="institute_name"
                  label="Institute Name"
                  rules={[
                    { required: false, message: "Missing Institue Name" },
                  ]}
                >
                  <Input placeholder="Institue Name" />
                </Form.Item>
                <Form.Item
                  name="institute_address"
                  label="Institute Address"
                  rules={[
                    { required: false, message: "Missing Institute Address" },
                  ]}
                >
                  <Input placeholder="Institute Address" />
                </Form.Item>
              </Space>
              <div className="update-employer-btn">
                <Form.Item>
                  <Button
                    type="primary"
                    className="login-form-button save-btn "
                    htmlType="submit"
                  >
                    UPDATE QUALIFICATION
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdatePartnerQualification;
