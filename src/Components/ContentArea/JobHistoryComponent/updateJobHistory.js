import React, { Fragment, useEffect } from "react";
import { Form, Input, Button, Space, DatePicker } from "antd";
import moment from "moment";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const UpdateJobHistory = ({
  onaddJobHistory,
  onGetClientProfile,
  clientProfile,
  getJobHistoryRes,

  onPutJobHistoryData,

  historyData,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    onGetClientProfile();
  }, [onGetClientProfile]);

  useEffect(() => {
    debugger;
    form.setFieldsValue({
      job_title: historyData && historyData.jobTitle,
      employer_name: historyData && historyData.employerName,
      employer_address: historyData && historyData.employerAddress,
      start_date: historyData && new moment(historyData.startDate),
      end_date: historyData && new moment(historyData.endDate),
    });
  }, [getJobHistoryRes]);

  const onFinish = (values) => {
    debugger;
    console.log("Received values of form:", values);
    debugger;
    const data = {
      id: historyData && historyData.id,
      clientId: historyData && historyData.clientId,
      employerId: historyData && historyData.employerId,
      jobId: 0,
      jobTitle: values.job_title,
      startDate: values.start_date,
      endDate: values.end_date,
      employerName: values.employer_name,
      employerAddress: values.employer_address,
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
      arrivalDate: "2020-12-22T16:00:29.303Z",
      modifiedBy: historyData && historyData.modifiedBy,
    };
    debugger;
    onPutJobHistoryData(data);
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
                  name="job_title"
                  label="Job Title"
                  rules={[{ required: false, message: "Missing Job Title" }]}
                >
                  <Input placeholder="Job Title" />
                </Form.Item>
                <Form.Item
                  name="employer_name"
                  label="Employer Name"
                  rules={[
                    { required: false, message: "Missing Employer Name" },
                  ]}
                >
                  <Input placeholder="Employer Name" />
                </Form.Item>
                <Form.Item
                  name="employer_address"
                  label="Employer Address"
                  rules={[
                    { required: false, message: "Missing Employer Address" },
                  ]}
                >
                  <Input placeholder="Employer Address" />
                </Form.Item>
                <Form.Item
                  name="start_date"
                  label="Start Date"
                  rules={[{ required: false, message: "Missing Start Date" }]}
                >
                  <DatePicker className="w-100" format={dateFormatList} />
                </Form.Item>
                <Form.Item
                  name="end_date"
                  label="End Date"
                  rules={[{ required: false, message: "Missing End Date" }]}
                >
                  <DatePicker
                    className="w-100"
                    defaultValue={moment("17/0919", dateFormatList[0])}
                    format={dateFormatList}
                  />
                </Form.Item>
              </Space>
              <div className="update-employer-btn">
                <Form.Item>
                  <Button
                    type="primary"
                    className="login-form-button save-btn "
                    htmlType="submit"
                  >
                    UPDATE JOB HISTORY
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

export default UpdateJobHistory;
