import React, { useState } from 'react';

import { Table, Button, Space, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const DocumentFormTwo = () => {
  const columns = [
    {
      title: 'Upload Date',
      dataIndex: 'title',
      key: 'Upload Date',
    },
    {
      title: 'Link Client',
      dataIndex: 'linkClient',
      key: 'Link Client',
      render: (text, record) => (
        <div>
          Please <Button className="click-here" type="link">{text}</Button> to open
        </div>
      ),
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
      render: (text, record) => (
        <Space size="middle">
          {
            text
          }
          <Button className="copy-link" type="default">Copy Link</Button>
        </Space>
      ),
    }
  ];
  const data = [
    {
      key: '1',
      title: 'Attachment 3.pdf',
      linkClient: 'Click Here',
      link: 'https://checkmyvisa.co.nz/',
    },
    {
      key: '2',
      title: 'Attachment 3.pdf',
      linkClient: 'Click Here',
      link: 'https://checkmyvisa.co.nz/',
    },

  ];

  return (
    <div className="mar-top-1 mb-6rem document-table">
      <Table
        rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
        columns={columns}
        dataSource={data}
        pagination={false}


      />
    </div>
  )
}

export default DocumentFormTwo;
