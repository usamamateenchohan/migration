import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Link } from "react-router-dom";
import { Tabs, Badge, Divider } from 'antd';
import { RightOutlined } from '@ant-design/icons';


const VideoList = () => {

    const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true)
    }

    const handleCancel = e => {
        setVisible(false)
    };

    return (
        <div className="mt-6rem">
            <div className="visa-form-main">
                <ul>
                    <li><span><RightOutlined /></span></li>
                    <li><a onClick={showModal} href="#!">Balance</a></li>
                </ul>
                <ul>
                    <li><span><RightOutlined /></span></li>
                    <li><a onClick={showModal} href="#!">Email</a></li>
                </ul>
                <ul>
                    <li><span><RightOutlined /></span></li>
                    <li><a onClick={showModal} href="#!">Client Profile</a></li>
                </ul>
                <ul>
                    <li><span><RightOutlined /></span></li>
                    <li><a onClick={showModal} href="#!">Document</a></li>
                </ul>
                <ul>
                    <li><span><RightOutlined /></span></li>
                    <li><a onClick={showModal} href="#!">Visa Form</a></li>
                </ul>


            </div>
            <Modal
                title={false}
                visible={visible}
                onCancel={handleCancel}
                footer={false}
                className="video-modal"
                width={680}
            >
                <iframe width="680" height="480" src="https://www.youtube.com/embed/4UIeDEKxpJI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal>
        </div>
    )
}

export default VideoList;