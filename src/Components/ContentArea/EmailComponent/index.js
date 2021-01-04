import React from 'react';
import { Row, Col } from 'antd';
import EmailCompanyProfile from './EmailCompanyProfile';
import EmailTabsSection from './EmailTemplatesTabs';

const EmailComponent = () => (
  <div className="container Email-main-sec">
    <Row gutter={16}>
      <Col span={4}><EmailCompanyProfile /></Col>
      <Col span={20}>
        <EmailTabsSection />
      </Col>
    </Row>
  </div>
);

export default EmailComponent;
