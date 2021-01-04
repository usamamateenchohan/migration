import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { getUrlLastId } from './../Common/reUseFunctions';
import { Link } from "react-router-dom";

const Login = ({
  onSignIn,
  history,
  setPageUrl,
  location,
  setShowForm
}) => {

  const [email, setEmail] = useState("");
  const [ezmId, setEzmId] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const locationUrl = location.pathname;
    const getUrlPath = getUrlLastId(locationUrl);
    setPageUrl(getUrlPath)

  }, []);

  const onFinish = values => {
    console.log('Success:', values);
    const emailAndEzmId = email ? values.email : values.ezm_id;
    const data = {
      Email: emailAndEzmId,
      IsEzmId: ezmId && ezmId.length > 0 ? true : false,
      Password: values.password,
    };

    // if (data.ezmId === "123") {
    //   debugger
    //   history.push('/email');
    // }
    onSignIn(data)
    setLoading(true);
    // .then(() => {
    //   debugger
       
    // })
    // if ((values.ezm_id === "1234") && (values.password === "1234")) {
    //   alert("Incoreact User Password")
    // }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onChangeEmail = e => {
    console.log("valuesvaluesvaluesvalues", e.target.value);
    setEmail(e.target.value);
  }

  const onChangeEzmId = e => {
    console.log("valuesvaluesvaluesvalues", e.target.value);
    setEzmId(e.target.value);
  }
  console.log("emailemailemail", email)
  return (
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
        rules={[{ required: false, message: 'Please input your Email' }]}
      >
        <Input onChange={onChangeEmail} disabled={ezmId && ezmId.length > 0 ? true : false} placeholder="Email" />
      </Form.Item>
      <span className="or">OR</span>
      <Form.Item
        name="ezm_id"
        rules={[{ required: false, message: 'Please input your EZM ID!' }]}

      >
        <Input onChange={onChangeEzmId} disabled={email && email.length > 0 ? true : false} placeholder="EZM ID" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Row>
        <Col span={10}>
          <div className="form-btns">
            <Form.Item>
              <Button type="primary" loading={loading} htmlType="submit" className="login-form-button">
                SIGN IN 
              </Button>
              <a className="login-form-forgot" onClick={() => setShowForm(true)}>
                Forgot password ?
              </a>
            </Form.Item>
          </div>
        </Col>
        <Col span={14}>
          <div className="remember-checkbox">
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox> Remember me next time</Checkbox>
            </Form.Item>
          </div>
        </Col>
      </Row>

    </Form>
  )
}

export default Login;