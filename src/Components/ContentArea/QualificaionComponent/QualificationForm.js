import React, { Fragment, useEffect } from "react";
import { Form, Input, Button, Space, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";

import UpdateQualificationForm from "./UpdateQualificationForm";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const QualificationForm = ({
  clientProfile,
  onGetClientProfile,
  onAddQualificaion,

  onGetQualificationData,
  getQualificationRes,

  onPutQualificationData,
}) => {
  useEffect(() => {
    onGetClientProfile();
    onGetQualificationData();
  }, [onGetClientProfile, onGetQualificationData]);

  const generateUUID = () => {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  };
  const onFinish = (values) => {
    debugger;
    console.log("Received values of form:", values);
    debugger;
    const data = {
      clientId: clientProfile && clientProfile.id,
      schoolId: generateUUID(),
      title:
        values.qualification &&
        values.qualification[0] &&
        values.qualification[0].title,
      levelId: 0,
      startDate:
        values.qualification &&
        values.qualification[0] &&
        values.qualification[0].start_date,
      endDate:
        values.qualification &&
        values.qualification[0] &&
        values.qualification[0].end_date,
      universityName:
        values.qualification &&
        values.qualification[0] &&
        values.qualification[0].institute_name,
      universityAddress:
        values.qualification &&
        values.qualification[0] &&
        values.qualification[0].institute_address,
      country: 0,
      streetNumber: "string",
      streetName: "string",
      suburb: "string",
      city: "string",
      state: "string",
      zip: "string",
      phone: "string",
      studentID: "string",
      website: "string",
      qualificationAwarded: true,
      createdBy: clientProfile && clientProfile.createdBy,
      level:
        values.qualification &&
        values.qualification[0] &&
        values.qualification[0].level,
    };
    debugger;
    onAddQualificaion(data);
  };
  console.log("getQualificationResgetQualificationRes098", getQualificationRes);
  return (
    <Fragment>
      <div className="container client-info-tab employer-form-input">
        <div className="form-container form-container-m">
          {getQualificationRes &&
            getQualificationRes.items &&
            getQualificationRes.items.length > 0 &&
            getQualificationRes.items.map((data, index) => {
              return (
                <UpdateQualificationForm
                  QualificationData={data}
                  key={index}
                  getQualificationRes={getQualificationRes}
                  onGetClientProfile={onGetClientProfile}
                  onPutQualificationData={onPutQualificationData}
                />
              );
            })}
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.List name="qualification">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <div className="forms-styling-tabs">
                      <Space
                        key={field.key}
                        style={{ display: "block", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item
                          {...field}
                          name={[field.name, "title"]}
                          label="Title"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            { required: false, message: "Missing Title" },
                          ]}
                        >
                          <Input placeholder="asadd" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "level"]}
                          label="Level"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            { required: false, message: "Missing Level" },
                          ]}
                        >
                          <Input placeholder="asdsdsdsd" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "start_date"]}
                          label="Start Date"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            { required: false, message: "Missing Start Date" },
                          ]}
                        >
                          <DatePicker
                            className="w-100"
                            defaultValue={moment(
                              "17/08/2019",
                              dateFormatList[0]
                            )}
                            format={dateFormatList}
                          />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "end_date"]}
                          label="End Date"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            { required: false, message: "Missing End Date" },
                          ]}
                        >
                          <DatePicker
                            className="w-100"
                            defaultValue={moment("17/0919", dateFormatList[0])}
                            format={dateFormatList}
                          />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "institute_name"]}
                          label="Institute Name"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            {
                              required: false,
                              message: "Missing Institue Name",
                            },
                          ]}
                        >
                          <Input placeholder="adasadasd" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "institute_address"]}
                          label="Institute Address"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            {
                              required: false,
                              message: "Missing Institute Address",
                            },
                          ]}
                        >
                          <Input placeholder="qweqwee 1578" />
                        </Form.Item>

                        <Link
                          onClick={() => remove(field.name)}
                          className="remove-button"
                        >
                          <div>
                            <p>Remove</p>
                          </div>
                          <div>
                            <MinusCircleOutlined />
                          </div>
                        </Link>
                      </Space>
                    </div>
                  ))}
                  <Form.Item className="form-add-btn">
                    <Button
                      className="login-form-button"
                      type="primary"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      ADD
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button
                type="primary"
                className="login-form-button save-btn"
                htmlType="submit"
              >
                SAVE
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default QualificationForm;
