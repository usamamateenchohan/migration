import React, { Fragment, useState } from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import LoginForm from './../../Users/Login';
import ForgotPassword from './../../Users/ForgotPassword'



const ClientInfoCenter = ({
  onSignIn,
  setPageUrl,
  location,
  visibleDiv
}) => {

 const [showForm, setShowForm] = useState(false);
  return (

    <Row gutter={16}>
      <Col span={13}>
        <div className="client-info">
          <h2 className="heading-two">CLIENT INFORMATION CENTER</h2>
          <p>
            You are probably on this website because you were given a link by your immigration advisor. CheckMyVisa is an information and communication portal that gives you real time information on your Visa status. It also allows you to communicate directly with your immigration advisor at any time of the day or night, access important documents and forms, and upload documents. You don't have to worry about the security of emails, or of emails not getting through. You also don't have to wait until office hours to find out what is happening with your application, or get access to an important document. With CheckMyVisa, everything is at your fingertips whenever you want it.
          </p>
        </div>
      </Col>
      <Col span={11}>
        {/* {
          showForm === false ?
          
        } */}
        {
          showForm === false &&
          <Fragment>
        {
          (visibleDiv === false) ?
          <div className="login-form-sec">
          <h2 className="heading-two">CLIENT INFORMATION CENTER</h2>
          <p>Log in and get to work</p>
          <div className="form-style">
            <LoginForm
              onSignIn={onSignIn}
              setPageUrl={setPageUrl}
              location={location}
              setShowForm={setShowForm}
            />
          </div>
        </div>
          :
          <div className="login-form-sec">
            <iframe width="520" height="365" src="https://www.youtube.com/embed/woCN1FLNQr8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        }
        </Fragment>
        }
        
        {
              showForm === true &&
              <div className="login-form-sec">
                <div className="form-style">
              <ForgotPassword 
              setShowForm={setShowForm}
              />
              </div>
              </div>
            }
      </Col>
      <Col span={24}>
        <div className="b-b"></div>
      </Col>
    </Row>

  )
}

export default ClientInfoCenter;