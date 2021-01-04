import React, { Fragment, useEffect } from "react";
import { Form, Input, Button, Space, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import UpdateJobHistory from "./updateJobHistory";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const JobHistory = ({
  onaddJobHistory,
  onGetClientProfile,
  clientProfile,
  onGetJobHistoryData,
  getJobHistoryRes,

  onPutJobHistoryData,
}) => {
  useEffect(() => {
    onGetClientProfile();
    onGetJobHistoryData();
  }, [onGetClientProfile, onGetJobHistoryData]);

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
      employerId: generateUUID(),
      jobId: 0,
      jobTitle: values.job_history[0] && values.job_history[0].job_title,
      startDate: values.job_history[0] && values.job_history[0].start_date,
      endDate: values.job_history[0] && values.job_history[0].end_date,
      employerName:
        values.job_history[0] && values.job_history[0].employer_name,
      employerAddress:
        values.job_history[0] && values.job_history[0].employer_address,
      payDetails: "string",
      phone: "string",
      managerName: "string",
      managerEmail: "string",
      managerMobile: "string",
      positionOffered: "string",
      jobOffer: "string",
      companyRole: "string",
      mentionHoursInWeek: "string",
      anzscoCode: "string",
      skillLevel: "string",
      businessNumber: "string",
      isCurrent: true,
      tradingName: "string",
      workStay: "string",
      businessType: "string",
      employementType: "string",
      streetNumber: "string",
      streetName: "string",
      suburb: "string",
      city: "string",
      state: "string",
      zip: "string",
      country: 0,
      website: "string",
      annualsalary: "string",
      ratePerHour: "string",
      activityBasedRemuneration: "string",
      workExperince: "string",
      domicile: "string",
      accountDuties: "string",
      contactPersonJobTitle: "string",
      arrivalDate: "2020-12-15T17:17:37.592Z",
      createdBy: clientProfile && clientProfile.createdBy,
    };
    debugger;
    onaddJobHistory(data);
  };
  console.log(
    "getJobHistoryResgetJobHistoryResgetJobHistoryRes",
    getJobHistoryRes
  );
  return (
    <Fragment>
      <div className="container client-info-tab employer-form-input">
        <div className="form-container form-container-m">
          {getJobHistoryRes &&
            getJobHistoryRes.items &&
            getJobHistoryRes.items.length > 0 &&
            getJobHistoryRes.items.map((data, index) => {
              return (
                <UpdateJobHistory
                  historyData={data}
                  key={index}
                  getJobHistoryRes={getJobHistoryRes}
                  onGetClientProfile={onGetClientProfile}
                  onPutJobHistoryData={onPutJobHistoryData}
                />
              );
            })}
          <Form
            name="job_history"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.List name="job_history">
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
                          name={[field.name, "job_title"]}
                          label="Job Title"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            { required: false, message: "Missing Job Title" },
                          ]}
                        >
                          <Input placeholder="Job Title" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "employer_name"]}
                          label="Employer Name"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            {
                              required: false,
                              message: "Missing Employer Name",
                            },
                          ]}
                        >
                          <Input placeholder="Employer Name" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "employer_address"]}
                          label="Employer Address"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            {
                              required: false,
                              message: "Missing Employer Address",
                            },
                          ]}
                        >
                          <Input placeholder="Employer Address" />
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
                            format={dateFormatList}
                          />
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

export default JobHistory;
