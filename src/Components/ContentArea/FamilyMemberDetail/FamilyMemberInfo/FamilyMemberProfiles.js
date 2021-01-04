import React from 'react';
import { Link } from "react-router-dom";
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const FamilyMemberProfile = () => {
    function callback(key) {
      console.log(key);
    }
    return (
        <framgmant>
        <div className="container client-info-tab information-area-bg padding-tb">
            <div className="client-information-container">
                <div className="align-center">
                    <h2 className="info-heading">PERSONAL INFORMATION</h2>
                </div>
                <div className="align-center">
                <Avatar size={70} icon={<UserOutlined />} />
                </div>
                <div className="information-area">
                    <ul>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Client's First Name:</span>
                            <span className="w40-40">Caitlin</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Middle Name:</span>
                            <span className="w40-40">Amelia</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Last Name:</span>
                            <span className="w40-40">Leaf</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Email:</span>
                            <span className="w40-40">ashley@ezymigration.co.nz</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Address:</span>
                            <span className="w40-40">51 Wada Ocean Reserve</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Mobile Phone:</span>
                            <span className="w40-40">64(125)-99590209</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Land Line:</span>
                            <span className="w40-40"></span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Other Contact Information:</span>
                            <span className="w40-40"></span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Marital Status:</span>
                            <span className="w40-40">Married</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Number of dependent children:</span>
                            <span className="w40-40">2</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Occupation:</span>
                            <span className="w40-40"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="container client-info-tab information-area-bg mar-top padding-tb">
            <div className="client-information-container">
                <div className="align-center">
                    <h2 className="info-heading">PASSPORT DETAIL</h2>
                </div>

                <div className="information-area">
                    <ul>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Passport Number:</span>
                            <span className="w40-40">NZ81HUG4H</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Country Of Issue:</span>
                            <span className="w40-40">New Zealand</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Passport Issue Date:</span>
                            <span className="w40-40">19/02/2019</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Passport Expiry Date:</span>
                            <span className="w40-40">04/02/2022</span>
                        </li>
                        
                       
                    </ul>
                </div>
            </div>
        </div>

        <div className="container client-info-tab information-area-bg mar-top padding-tb">
            <div className="client-information-container">
                <div className="align-center">
                    <h1 className="info-heading">SECOND PASSPORT DETAIL (IF CLIENT IS DUAL NATIONAL)</h1>
                </div>
                <div className="information-area">
                    <ul>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Second Passport Number:</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Second Country Of Issue:</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Second Passport Issue Date:</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Second Passport Expiry Date:</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container client-info-tab information-area-bg mar-top padding-tb">
            <div className="client-information-container">
                <div className="align-center">
                    <h1 className="info-heading">VISA DETAIL (IF KNOWN)</h1>
                </div>
                <div className="information-area">
                    <ul>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Current Visa Type:</span>
                            <span className="w40-40">Citizenship</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Current New Zeland Visa Expiry Date:</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container client-info-tab information-area-bg mar-top padding-tb mb-30">
            <div className="client-information-container">
                <div className="align-center">
                    <h1 className="info-heading">MEDICAL DETAIL</h1>
                </div>
                <div className="information-area">
                    <ul>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">NZER:</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Second Country Of Issue:</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Second Passport Issue Date:</span>
                        </li>
                        <li className="d-flex client-information-setting">
                            <span className="w60-per">Second Passport Expiry Date:</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Button type="primary" className="login-form-button save-btn">
          SAVE
        </Button>
        </framgmant>
        
        
    )
  }
  
  export default FamilyMemberProfile;
