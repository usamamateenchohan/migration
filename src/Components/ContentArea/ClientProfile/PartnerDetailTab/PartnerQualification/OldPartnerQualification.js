import React, { Fragment } from "react";
import { Form, Input, Button, Space, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const PartnerQualificationForm = () => {
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
                  name="title"
                  label="Title"
                  rules={[{ required: false, message: "Missing Title" }]}
                >
                  <Input placeholder="asadd" />
                </Form.Item>
                <Form.Item
                  name="level"
                  label="Level"
                  rules={[{ required: false, message: "Missing Level" }]}
                >
                  <Input placeholder="asdsdsdsd" />
                </Form.Item>
                <Form.Item
                  name="start date"
                  label="Start Date"
                  rules={[{ required: false, message: "Missing Start Date" }]}
                >
                  <DatePicker
                    className="w-100 "
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
                    className="w-100 "
                    defaultValue={moment("17/0919", dateFormatList[0])}
                    format={dateFormatList}
                  />
                </Form.Item>
                <Form.Item
                  name="institue name"
                  label="Institue Name"
                  rules={[
                    { required: false, message: "Missing Institue Name" },
                  ]}
                >
                  <Input placeholder="adasadasd" />
                </Form.Item>
                <Form.Item
                  name="institute address"
                  label="Institute Address"
                  rules={[
                    { required: false, message: "Missing Institute Address" },
                  ]}
                >
                  <Input placeholder="qweqwee 1578" />
                </Form.Item>
              </Space>
            </div>
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
                          name={[field.name, "Title"]}
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
                          name={[field.name, "Level"]}
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
                        <Form.Item
                          {...field}
                          name={[field.name, "Institue Name"]}
                          label="Institue Name"
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
                          name={[field.name, "Institute Address"]}
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

export default PartnerQualificationForm;
