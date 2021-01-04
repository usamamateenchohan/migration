import React, { useEffect } from 'react';
import EZYLogo from './../../statics/images/ezy-logo.png';
import { PlayCircleOutlined } from '@ant-design/icons';
import PinIcon from './../../statics/images/pin.svg';
import PhoneIcon from './../../statics/images/phone.svg';
import EmailIcon from './../../statics/images/email.svg';
import { adressIcon, phoneIcon, contactMailIcon } from './../Common/icons'

const ContactUs = () => {

  return (
    <div className="footer-contact container">
      <h2 className="footer-title">Contact us for more details</h2>
      <div className="contact-info-sec">
        <div className="footer-logo">
          <div>
            <img src={EZYLogo} alt="EZY Migration" />
            <p>SMITTEN ONLINE T/A</p>
            <p>EZYMIGRATE</p>
          </div>
        </div>
        <div className="footer-info-text">
          <div className="footer-info-box">
            <div>
              <div className="contact-us-icon">{adressIcon}</div>
              <h4><span>Address</span></h4>
              <p>Level 2, 9 Anzac Street ,</p>
              <p>Takapuna, Auckland</p>
            </div>
          </div>
          <div className="footer-info-box">
            <div className="contact-us-icon">{phoneIcon}</div>
            <div>
              <h4><span>Phone</span></h4>
              <p>+64-9-9508491</p>
            </div>
          </div>
          <div className="footer-info-box">
            <div>
              <div className="contact-us-icon">{contactMailIcon}</div>
              <h4><span>Email</span></h4>
              <p>anna@ezymigrate.co.nz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;