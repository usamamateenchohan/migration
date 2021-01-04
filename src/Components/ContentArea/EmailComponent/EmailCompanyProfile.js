import React from 'react';
import { Avatar } from 'antd';
import { Link } from "react-router-dom";

const EmailCompanyProfile = () => (
  <div className="email-company-profile-sec">
    <ul>
      <li>
        <Link>
          <div className="email-company-profile">
            <Avatar src="https://avatars3.githubusercontent.com/u/10627086?s=40&v=4" />
            <span>BENEDIT THOMAS</span>
          </div>
        </Link>
      </li>
      <li>
        <Link>
          <div className="email-company-profile">
            <Avatar src="https://avatars2.githubusercontent.com/u/28024000?s=40&v=4" />
            <span>BENEDIT THOMAS</span>
          </div>
        </Link>
      </li>
    </ul>

  </div>
);

export default EmailCompanyProfile;
