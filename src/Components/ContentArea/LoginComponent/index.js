import React, { Fragment } from 'react';
import ClientInfoCenter from './ClientInfoCenter.js';
import KeyFeature from './KeyFeatures.js';

const LoginComponent = ({
  onSignIn, setPageUrl, location, visibleDiv
}) => (
    <Fragment>
      <div className="container login-sec">
        <ClientInfoCenter
          onSignIn={onSignIn}
          setPageUrl={setPageUrl}
          location={location}
          visibleDiv={visibleDiv}
        />
      </div>
      <div className="container">
        <KeyFeature />
      </div>
    </Fragment>
  );

export default LoginComponent;
