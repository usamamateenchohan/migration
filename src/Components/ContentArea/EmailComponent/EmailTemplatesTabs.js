import React from 'react';
import { Tabs } from 'antd';
import EmailTemplateHistory from './EmailTemplatesHistory';
import EmailEditorToolbar from './EmailEditorToolbar'

const { TabPane } = Tabs;

const EmailTemplatesTabs = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="email-tabs-sec">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="HISTORY" key="1">
          <EmailTemplateHistory />
        </TabPane>
        <TabPane tab="CREATE" key="2">
          <EmailEditorToolbar />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default EmailTemplatesTabs;