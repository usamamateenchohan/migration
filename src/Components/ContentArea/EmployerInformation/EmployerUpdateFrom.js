import React, { Fragment, useEffect } from "react";
import { Form, Input, Button, Space } from "antd";

const EmployerUpdateFrom = ({
  onGetEmployerInformation,
  employerInformationRes,
  onAddemployerInformation,
  onUpdateEmployerInformation,
  onGetClientProfile,
  clientProfile,

  employerData,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    onGetClientProfile();
  }, [onGetClientProfile]);

  useEffect(() => {
    debugger;
    form.setFieldsValue({
      name: employerData && employerData.name,
      legal_name: employerData && employerData.name,
      address: employerData && employerData.address,
      contact_person: employerData && employerData.contactPerson,
      email: employerData && employerData.email,
      mobile_phone: employerData && employerData.contactNo,
      phone: employerData && employerData.mobile,
      website: employerData && employerData.website,
      nzbn: employerData && employerData.nzbn,
    });
  }, [employerInformationRes]);

  const onFinish = (values) => {
    debugger;
    console.log("Received values of form:", values);
    debugger;
    const updateEmployer = {
      id: employerData && employerData.id,
      branchId: employerData && employerData.branchId,
      name: values.name,
      email: values.email,
      contactNo: values.mobile_phone,
      business: "string",
      city: "string",
      contactPerson: values.contact_person,
      mobile: values.phone,
      website: values.website,
      jobSector: "string",
      nzbn: values.nzbn,
      occupation: "string",
      numberOfEmployees: "string",
      yearsOfBusiness: "string",
      isPotential: true,
      employerType: "string",
      address: values.address,
      agreementUrl: "string",
      xeroID: "string",
      modifiedBy: employerData && employerData.modifiedBy,
    };
    debugger;
    onUpdateEmployerInformation(updateEmployer);
  };

  console.log(
    "employerInformationResemployerInformationRes",
    employerInformationRes
  );
  return (
    <Fragment>
      <div className="container client-info-tab employer-form-input">
        <div className="form-container form-container-m">
          <Form
            name="employer_update_form"
            onFinish={onFinish}
            autoComplete="off"
            form={form}
            layout="vertical"
          >
            <div className="forms-styling-tabs">
              <Space
                style={{ display: "block", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: false, message: "Missing Name" }]}
                >
                  <Input placeholder="Anna John" />
                </Form.Item>
                <Form.Item
                  name="legal_name"
                  label="Legal Name"
                  rules={[{ required: false, message: "Missing Legal Name" }]}
                >
                  <Input placeholder="Legal Name" />
                </Form.Item>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[{ required: false, message: "Missing Address" }]}
                >
                  <Input placeholder="Address" />
                </Form.Item>
                <Form.Item
                  name="contact_person"
                  label="Contact Person"
                  rules={[
                    { required: false, message: "Missing Contact Person" },
                  ]}
                >
                  <Input placeholder="Contact Person" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      type: "email",
                      required: false,
                      message: "Missing Email",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="mobile_phone"
                  label="Mobile Phone"
                  rules={[{ required: false, message: "Missing Mobile Phone" }]}
                >
                  <Input placeholder="1651611651" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone"
                  rules={[{ required: false, message: "Missing Phone" }]}
                >
                  <Input placeholder="989898" />
                </Form.Item>
                <Form.Item
                  name="website"
                  label="Website"
                  rules={[{ required: false, message: "Missing Website" }]}
                >
                  <Input placeholder="www.123.com" />
                </Form.Item>
                <Form.Item
                  name="nzbn"
                  label="NZBN"
                  rules={[{ required: false, message: "Missing NZBN" }]}
                >
                  <Input placeholder="NZBN" />
                </Form.Item>
              </Space>
              <div className="update-employer-btn">
                <Form.Item>
                  <Button
                    type="primary"
                    className="login-form-button save-btn "
                    htmlType="submit"
                  >
                    UPDATE EMPLOYER
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

export default EmployerUpdateFrom;
