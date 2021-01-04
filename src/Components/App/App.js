import React, { Fragment, useState } from 'react';
import { Layout } from 'antd';

import ContentArea from './../ContentArea';
import HeaderComponent from '../Header';
import FooterComponent from '../Footer';
import MenuCom from '../MenuComponent';

function App({
  location,
  onlogOut,
}) {
  const [pageUrl, setPageUrl] = useState("");
  const [visibleDiv, setVisibleDiv] = useState(false);

  return (
    <Fragment>
      <HeaderComponent
        pageUrl={pageUrl}
        onlogOut={onlogOut}
        setVisibleDiv={setVisibleDiv}
        visibleDiv={visibleDiv}
      />
      {
        pageUrl === "login" ?
          "" :
          <MenuCom />
      }

      <ContentArea
        setPageUrl={setPageUrl}
        location={location}
        visibleDiv={visibleDiv}
      />
      <FooterComponent
        pageUrl={pageUrl}
      />
    </Fragment>
  );
}

export default App;
