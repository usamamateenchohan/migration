import React, {useState} from 'react';

import { Table, Button, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const DocumentFormOne = () => {
    const columns = [
        {
          title: 'SN',
          dataIndex: 'SN',
          key: 'SN',
          
        },
        {
          title: 'Upload Date',
          dataIndex: 'UploadDate',
          key: 'Upload Date',
        },
       
        {
          title: 'Title',
          key: 'Title',
          dataIndex: 'Title',
        },
        {
            title: 'Document',
            key: 'Document',
            dataIndex: 'Document',
          },
        {
          title: 'Type',
          key: 'Type',
          render: (text, record) => (
            <Space size="middle">
              <Button className="download-btn" type="default" icon={<DownloadOutlined />} />
              
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          SN: '1',
          UploadDate: '12 Nov 2019',
          Title: 'Attachment 3.pdf',
          Document: 'Attachment 3.pdf',
          
        },
        {
          key: '2',
          SN: '2',
          UploadDate: '12 Nov 2019',
          Title: 'Attachment 3.pdf',
          Document: 'Attachment 3.pdf',
          
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

export default DocumentFormOne;
