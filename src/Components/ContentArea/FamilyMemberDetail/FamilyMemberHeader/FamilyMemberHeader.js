import React from 'react';
import { Radio, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const FamilyMemberHeader = () => {
    const onChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
      }
    return(
        <div className="container-family-header ">
        <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a">addi</Radio.Button>
        <Radio.Button value="b">alex</Radio.Button>
        </Radio.Group>
         
        <Button className="login-form-button" type="primary" block icon={<PlusOutlined />}>
                ADD
        </Button>
        </div>
    );
    
}
export default FamilyMemberHeader;