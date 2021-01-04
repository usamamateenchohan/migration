import React from 'react';
import { Avatar, Button } from 'antd';
import EZYLogo from './../../../statics/images/ezy-logo2.png';
import AttachmentImage from './../../../statics/images/attachment.png';


const EmailTemplatesHistory = () => {

  return (
    <div className="email-history-sec">
      <div className="email-history-header">
        <div className="email-history-subject">
          <p>Subject: <span>Welcome to CHECKMYVISA.CO.NZ</span></p>
        </div>
        <div className="email-history-date">
          <p>Date: 28/05/2020</p>
        </div>
      </div>
      <div className="email-history-view">
        <div className="email-history-view-avatar">
          <Avatar size={110} src="https://thegameofnetworking.com/wp-content/uploads/2016/10/rob-sperry-round-profile.png" />
        </div>
        <div className="email-history-view-text">
          <div className="email-history-user-info">
            <h4>BENEDICT THOMAS</h4>
            <p>welcome to checkmyvisa.co.nz</p>
          </div>
          <div className="email-history-body">
            <p>
              Dear Caitlin
            </p>
            <p>
              Your Immigration Adviser / Lawyer has registered your e mail address with
              www.checkmyvisa.co.nz.Please click on the ACTIVATE button below to create your free account.
            </p>
          </div>
          <div className="email-history-bottom">
            <p>Please click on the link below to Activate your account.</p>
            <p>ACTIVATE MY ACCOUNT</p>
            <p>Kind regards</p>
          </div>
          <div className="email-history-regars">
            <p>Andrew Smith</p>
            <p>Director | Licensed Immigration Adviser | No.1000000 </p>
          </div>
          <div className="email-history-logo">
            <img src={EZYLogo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="email-attachment-text">
        <p>This e-mail with its attachments is confidential and may be subject to legal privilege. If it is not intended for you please reply
            immediately, destroy it and do not copy, disclose or use it in any way.</p>
      </div>
      <div className="email-reply-sec">
        <div className="email-history-attachment">
          <img src={AttachmentImage} alt="attachment" />
          <span>Attachments :</span>
        </div>
        <div className="email-history-reply">
          <Button type="primary" className="login-form-button">
            REPLY
              </Button>
        </div>
      </div>
    </div>
  )
}

export default EmailTemplatesHistory;