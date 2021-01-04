import React, { Fragment } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { emailIcon, informationIcon, documentIcon, immigrationIcon, forumsIcon, statusIcon } from './../../Common/icons'

const Login = () => {


  return (
    <div className="key-feature-sec">
      <div className="key-feature-heading">
        <h3 className="heading-two-light">KEY FEATURES OF</h3>
        <h2 className="heading-two">CHECK MY VISA</h2>
      </div>
      <div className="key-feature-box-sec">
        <div className="key-feature-box">
           <span className="key-feature-icon">{emailIcon}</span>
          <h3>Email</h3>
          <p>Send and receive secure emails with your
          immigration advisor regarding your Visa and your application status. You can also access
          previous emails and
conversations.</p>
        </div>
        <div className="key-feature-box">
          <span className="key-feature-icon">{informationIcon}</span>
          <h3>Information</h3>
          <p>View the information on your file to check its
accuracy and completeness. Having accurate and complete personal information will prevent delays in the Visa process.</p>
        </div>
        <div className="key-feature-box">
  <span className="key-feature-icon">{statusIcon}</span>
          <h3>Visa Status</h3>
          <p>Check your Visa status whenever you want to at the click of a button. As soon as the status changes and is updated by your immigration advisor, the new information will be available to you.</p>
        </div>
      </div>
      <div className="key-feature-box-sec">
        <div className="key-feature-box">
          <span className="key-feature-icon">{documentIcon}</span>
          <h3>Document Upload</h3>
          <p>A crucial part of the Visa application process is sending the relevant documents that are need along with your application form. You can upload those documents quickly and easily.</p>
        </div>
        <div className="key-feature-box">
  <span className="key-feature-icon">{immigrationIcon}</span>
          <h3>Immigration Forms</h3>
          <p>Download the correct and most up-to-date forms. You can edit the forms to fill in the various fields, print them, upload completed forms, and send completed forms back to your immigration advisor.</p>
        </div>
        <div className="key-feature-box">
  <span className="key-feature-icon">{forumsIcon}</span>
          <h3>Forums</h3>
          <p>Engage in discussions and view conversations on all topics related to moving to New Zealand, working here, settling here, and more.</p>
        </div>
      </div>
    </div>
  )
}

export default Login;