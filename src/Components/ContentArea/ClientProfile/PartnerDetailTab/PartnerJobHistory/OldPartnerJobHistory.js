import React, { Fragment } from "react";
import { Form, Input, Button, Space, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const ParnerJobHistory = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
    const { RangePicker } = DatePicker;
  };

  return (
    <Fragment>
      <div className="container client-info-tab employer-form-input">
        <div className="form-container form-container-m">
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <div className="forms-styling-tabs">
              <Space
                style={{ display: "block", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  name="job title"
                  label="Job Title"
                  rules={[{ required: false, message: "Missing Job Title" }]}
                >
                  <Input placeholder="Anna John" />
                </Form.Item>
                <Form.Item
                  name="employer name"
                  label="Employer Name"
                  rules={[
                    { required: false, message: "Missing Employer Name" },
                  ]}
                >
                  <Input placeholder="AJLTD" />
                </Form.Item>
                <Form.Item
                  name="employer address"
                  label="Employer Address"
                  rules={[
                    { required: false, message: "Missing Employer Address" },
                  ]}
                >
                  <Input placeholder="wqdef" />
                </Form.Item>
                <Form.Item
                  name="start date"
                  label="Start Date"
                  rules={[{ required: false, message: "Missing Start Date" }]}
                >
                  <DatePicker
                    className="w-100"
                    defaultValue={moment("17/08/2019", dateFormatList[0])}
                    format={dateFormatList}
                  />
                </Form.Item>
                <Form.Item
                  name="end date"
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
            </div>
            <Form.List name="job history">
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
                          name={[field.name, "Job Title"]}
                          label="Job Title"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            { required: false, message: "Missing Job Title" },
                          ]}
                        >
                          <Input placeholder="Anna John" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "Employer Name"]}
                          label="Employer Name"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            {
                              required: false,
                              message: "Missing Employer Name",
                            },
                          ]}
                        >
                          <Input placeholder="AJLTD" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "Employer Address"]}
                          label="Employer Address"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            {
                              required: false,
                              message: "Missing Employer Address",
                            },
                          ]}
                        >
                          <Input placeholder="wqdef" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "Start Date"]}
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
                          name={[field.name, "End Date"]}
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

export default ParnerJobHistory;
