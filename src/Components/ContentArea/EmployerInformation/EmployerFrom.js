import React, { Fragment, useEffect } from "react";
import { Form, Input, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import EmployerUpdateForm from "./EmployerUpdateFrom";

const EmployerForm = ({
  onGetEmployerInformation,
  employerInformationRes,
  onAddemployerInformation,
  onUpdateEmployerInformation,
  onGetClientProfile,
  clientProfile,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    onGetClientProfile();
    onGetEmployerInformation();
  }, [onGetClientProfile, onGetEmployerInformation]);

  // useEffect(() => {
  //   form.setFieldsValue({
  //     name:
  //       employerInformationRes &&
  //       employerInformationRes.length > 0 &&
  //       employerInformationRes.map((item) => item.name),
  //     legal_name: employerInformationRes &&
  //       employerInformationRes.length > 0 &&
  //       employerInformationRes.map((item) => item.name),
  //     address: employerInformationRes &&
  //       employerInformationRes.length > 0 &&
  //       employerInformationRes.map((item) => item.address),
  //     contact_person:
  //       employerInformationRes &&
  //       employerInformationRes.length > 0 &&
  //       employerInformationRes.map((item) => item.contactPerson),
  //     email: employerInformationRes &&
  //       employerInformationRes.length > 0 &&
  //       employerInformationRes.map((item) => item.email),
  //     mobile_phone: employerInformationRes &&
  //       employerInformationRes.length > 0 &&
  //       employerInformationRes.map((item) => item.contactNo),
  //     phone: employerInformationRes &&
  //       employerInformationRes.length > 0 &&
  //       employerInformationRes.map((item) => item.mobile),
  //     website: employerInformationRes &&
  //       employerInformationRes.length > 0 &&
  //       employerInformationRes.map((item) => item.website),
  //     nzbn: employerInformationRes &&
  //       employerInformationRes.length > 0 &&
  //       employerInformationRes.map((item) => item.nzbn),
  //   });
  // }, [employerInformationRes]);

  const onFinish = (values) => {
    debugger;
    console.log("Received values of form:", values);
    debugger;
    const data = {
      branchId: clientProfile && clientProfile.branchId,
      clientId: clientProfile && clientProfile.id,
      name: values.add_new_employer[0] && values.add_new_employer[0].name,
      email: values.add_new_employer[0] && values.add_new_employer[0].email,
      contactNo:
        values.add_new_employer[0] && values.add_new_employer[0].mobile_phone,
      business: "string",
      city: "string",
      contactPerson:
        values.add_new_employer[0] && values.add_new_employer[0].contact_person,
      mobile: values.add_new_employer[0] && values.add_new_employer[0].phone,
      website: values.add_new_employer[0] && values.add_new_employer[0].website,
      jobSector: "string",
      nzbn: values.add_new_employer[0] && values.add_new_employer[0].nzbn,
      occupation: "string",
      numberOfEmployees: "string",
      yearsOfBusiness: "string",
      isPotential: true,
      employerType: "string",
      address: values.add_new_employer[0] && values.add_new_employer[0].address,
      agreementUrl: "string",
      xeroID: "string",
      createdBy: clientProfile && clientProfile.createdBy,
    };

    onAddemployerInformation(data).then(() => {
      onGetEmployerInformation();
    });

    // const updateEmployer = {
    //   id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   branchId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   name: "string",
    //   email: "string",
    //   contactNo: "string",
    //   business: "string",
    //   city: "string",
    //   contactPerson: "string",
    //   mobile: "string",
    //   website: "string",
    //   jobSector: "string",
    //   nzbn: "string",
    //   occupation: "string",
    //   numberOfEmployees: "string",
    //   yearsOfBusiness: "string",
    //   isPotential: true,
    //   employerType: "string",
    //   address: "string",
    //   agreementUrl: "string",
    //   xeroID: "string",
    //   modifiedBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    // };

    // onUpdateEmployerInformation(updateEmployer);
  };

  console.log(
    "employerInformationResemployerInformationRes",
    employerInformationRes
  );
  return (
    <Fragment>
      <div className="container client-info-tab employer-form-input">
        <div className="form-container form-container-m">
          {employerInformationRes &&
            employerInformationRes.length > 0 &&
            employerInformationRes.map((data, index) => {
              return (
                <EmployerUpdateForm
                  employerData={data}
                  key={index}
                  employerInformationRes={employerInformationRes}
                  onAddemployerInformation={onAddemployerInformation}
                  onUpdateEmployerInformation={onUpdateEmployerInformation}
                  onGetClientProfile={onGetClientProfile}
                  clientProfile={clientProfile}
                />
              );
            })}

          <Form
            name="add_new_employer"
            onFinish={onFinish}
            autoComplete="off"
            form={form}
            layout="vertical"
          >
            <Form.List name="add_new_employer">
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
                          name={[field.name, "name"]}
                          label="Name"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[{ required: false, message: "Missing Name" }]}
                        >
                          <Input placeholder="Anna John" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "legal_name"]}
                          label="Legal Name"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            { required: false, message: "Missing Legal Name" },
                          ]}
                        >
                          <Input placeholder="AJLTD" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "address"]}
                          label="Address"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            { required: false, message: "Missing Address" },
                          ]}
                        >
                          <Input placeholder="wqdef" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "contact_person"]}
                          label="Contact Person"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            {
                              required: false,
                              message: "Missing Contact Person",
                            },
                          ]}
                        >
                          <Input placeholder="wdetg" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "email"]}
                          label="Email"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            {
                              type: "email",
                              required: false,
                              message: "Missing Email",
                            },
                          ]}
                        >
                          <Input placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "mobile_phone"]}
                          label="Mobile Phone"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            {
                              required: false,
                              message: "Missing Mobile Phone",
                            },
                          ]}
                        >
                          <Input placeholder="1651611651" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "phone"]}
                          label="Phone"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            { required: false, message: "Missing Phone" },
                          ]}
                        >
                          <Input placeholder="989898" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "website"]}
                          label="Website"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[
                            { required: false, message: "Missing Website" },
                          ]}
                        >
                          <Input placeholder="www.qwqwqw.com" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "nzbn"]}
                          label="NZBN"
                          fieldKey={[field.fieldKey, "first"]}
                          rules={[{ required: false, message: "Missing NZBN" }]}
                        >
                          <Input placeholder="" />
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
                  <Form.Item className="form-add-btn ">
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

export default EmployerForm;
