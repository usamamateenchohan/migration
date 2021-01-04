import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';

const ForgotPassword = ({
  setShowForm
}) => {

  const onFinish = values => {
    console.log('Success:', values);
    if ((values.ezm_id === "1234") && (values.password === "1234")) {
      alert("Incoreact User Password")
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h2 className="heading-two">FORGOT PASSWORD</h2>
      <p>Please enter email address</p>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        className="mb-0"
        name="email"
        rules={[{ required: false, message: 'Please input your Email'}]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <span className="or">OR</span>
      <Form.Item
        name="ezm_id"
        rules={[{ required: true, message: 'Please input your Username'}]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      
      <Row>
        <Col span={10}>
          <div className="form-btns">
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                SUBMIT
              </Button>
            </Form.Item>
          </div>
        </Col>
        <Col span={14}>
          <div className="remember-checkbox">
          <a className="login-form-forgot" onClick={() => setShowForm(false)}>
                Back to Sign In
              </a>
          </div>
        </Col>
      </Row>
    </Form>
    </div>
  )
}

export default ForgotPassword;