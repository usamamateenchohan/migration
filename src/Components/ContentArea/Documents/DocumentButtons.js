import React, {useState} from 'react';
import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import { Tabs, Badge, Divider, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { changeConfirmLocale } from 'antd/lib/modal/locale';






const DocumentButtons = ({
    showTable,
    setShowTable
}) => {
   
  return (
    <div className="d-flex mt-6rem">
        <Button className="login-form-button mr-24" type="primary" icon={<PlusOutlined />}>
            ADD Document
        </Button>
        <Button className="document-button site-text" onClick={() => setShowTable(!showTable)} type="primary" >
            Document Checklist 
        </Button>
    </div>
  )
}

export default DocumentButtons;