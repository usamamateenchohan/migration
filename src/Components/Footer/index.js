import React, { Fragment } from 'react';
import FooterContact from './ContactUs';


const Footer = ({
  pageUrl
}) => {


  return (
    <Fragment>
      {
        pageUrl === "login" ?
          "" :
          <FooterContact />
      }

      <div className="footer-sec ">
        <p>Copyright © 2020 - Ezy Migrate. Customer Relationship Management Software. All rights reserved.</p>
      </div>
    </Fragment>
  )
}

export default Footer;