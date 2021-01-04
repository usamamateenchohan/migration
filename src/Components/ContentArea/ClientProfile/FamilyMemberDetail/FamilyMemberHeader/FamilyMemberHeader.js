import React from 'react';
import { Radio, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const FamilyMemberHeader = ({
    familyMemberDetail,

    familyMemberData
}) => {
    const onChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
    }
    return (
        <div className="container-family-header ">
            <div className="member-name-btn">
                {
                    (familyMemberDetail && familyMemberDetail.items.length > 0) &&
                    familyMemberDetail.items.map((item, index) => {
                        return (
                            <Button onClick={() => familyMemberData(item)} key={index} type="link">{item.firstName}</Button>
                        )
                    })
                }

            </div>

            <Button className="login-form-button" type="primary" block icon={<PlusOutlined />}>
                ADD
        </Button>
        </div>
    );

}
export default FamilyMemberHeader;