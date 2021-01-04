import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Login } from "./../../Containers";
import EmailComponent from "./EmailComponent";
import ClientComponet from "./../../Containers/ClientProfile";
import EmployerForm from "./EmployerInformation/EmployerFrom";
import JobHistory from "./JobHistoryComponent/JobHistory";
import VisaStatus from "./../../Containers/VisaStatus";
import Admission from "./../../Containers/EducationHistory";
import DocumentComponent from "./Documents";
import VisaFormComponent from "./VisaForm";
import VideosListComponent from "./VideoList";
import BalanceComponent from "./Balance";

const ContentArea = ({ setPageUrl, location, visibleDiv }) => (
  <Switch>
    <Redirect exact from="/" to="/login" />
    <Route
      path="/login"
      component={() => (
        <Login
          setPageUrl={setPageUrl}
          location={location}
          visibleDiv={visibleDiv}
        />
      )}
    />
    <Route path="/email" component={EmailComponent} />
    <Route path="/client-profile" component={ClientComponet} />
    {/* <Route path='/employer-imformation' component={EmployerForm} />
    <Route path='/job-history' component={JobHistory} /> */}
    <Route path="/visa-status" component={VisaStatus} />
    <Route path="/admission" component={Admission} />
    <Route path="/document" component={DocumentComponent} />
    <Route path="/visa-form" component={VisaFormComponent} />
    <Route path="/videos" component={VideosListComponent} />
    <Route path="/balance" component={BalanceComponent} />
  </Switch>
);

export default ContentArea;
