import React, { Fragment } from 'react';
import { Row, Col, Button } from 'antd';
import { ImportOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import HeaderAdvertise from './../../statics/images/advertisement.jpg'
import LogingBanner from './../../statics/images/login-banner.jpg';


const Header = ({
  pageUrl,
  onlogOut,
  setVisibleDiv,
  visibleDiv
}) => {
  const signOut = () => {
    onlogOut()
  }
  const onVisiblePart = () => {
    setVisibleDiv(true);
  }
  const onGoLogin = () => {
    setVisibleDiv(false);
  }
  return (
    <Fragment>
      <div className="container header-sec">
        <Row className="header-media">
          <Col lg={12}>
            <div className="header-left">
              <div >
                <h1>SMITTEN ONLINE T/A EZYMIGRATE</h1>
                {
                  pageUrl === "login" ?
                    <div className="btn-group">
                      <Link to="!#">Home</Link>
                      {
                        visibleDiv === false ?
                        <Link onClick={onVisiblePart}> Client Information Centre</Link>
                        :
                        <Link onClick={onGoLogin}>Sign In</Link>
                      }
                      
                    </div> :
                    <div className="btn-group logout-btn">
                      <Link onClick={signOut}><ImportOutlined /> Logout</Link>
                      <Link to="/">Home</Link>
                      <Link to="!#"> Client Information Centre</Link>
                    </div>
                }

              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="header-advertise">
              <img src={HeaderAdvertise} alt="Header Advertise" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="banner-sec">
        <img src={LogingBanner} alt="Banner" />
      </div>
    </Fragment>
  )
}

export default Header;