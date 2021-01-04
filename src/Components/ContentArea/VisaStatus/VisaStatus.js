import React, { useEffect, useState, Fragment } from "react";
import { Tabs, Badge, Divider } from "antd";

const VisaStatus = ({
  // onGetVisaStatus,
  // visaStatusRes,

  clientProfile,
  onGetClientProfile,

  onGetAllVisaStatus,
  allVisaStatusRes,
}) => {
  const [showTab, setShowTab] = useState(false);
  useEffect(() => {
    onGetClientProfile();

    if (clientProfile) {
      // onGetVisaStatus(clientProfile && clientProfile.branchId);
      onGetAllVisaStatus(clientProfile && clientProfile.branchId);
    }
  }, [clientProfile]);

  const colors = [
    { color: "pink", text: "Agreement Signed", date: "01/03/2020" },
    { color: "red", text: "Agreement Signed", date: "01/03/2020" },
    { color: "yellow", text: "Agreement Signed", date: "01/03/2020" },
    { color: "orange", text: "Allocated To Case Officer", date: "01/03/2020" },
    { color: "cyan", text: "Allocated To Case Officer", date: "01/03/2020" },
    { color: "green", text: "Approve in principle", date: "01/03/2020" },
    { color: "purple", text: "Assessing", date: "01/03/2020" },
    { color: "geekblue", text: "Assessing", date: "01/03/2020" },
    { color: "geekblue", text: "Preparing", date: "01/03/2020" },
  ];
  console.log("allVisaStatusRes ggggggggggg", allVisaStatusRes);
  return (
    <div>
      {allVisaStatusRes &&
        allVisaStatusRes.items.length > 0 &&
        allVisaStatusRes.items.map((data, index) => {
          return (
            <Fragment>
              <div key={index} className="visa-status-header">
                <div className="status-header-left">
                  <div>
                    <h2>{data.name}</h2>
                  </div>
                  <div>
                    <button
                      onClick={() => setShowTab(!showTab)}
                      className="event-visa-btn"
                    >
                      Details
                    </button>
                  </div>
                </div>
                <div className="status-header-right">
                  <h2>ASSESSING</h2>
                </div>
              </div>
              {showTab && (
                <div className="visa-status-body">
                  <div className="visa-hide-btn">
                    <button
                      onClick={() => setShowTab(false)}
                      className="event-visa-btn"
                    >
                      hide
                    </button>
                  </div>
                  <div className="visa-status-body-data">
                    <div>
                      {colors.map((item) => (
                        <div className="visa-body-text" key={item.color}>
                          <span>
                            <Badge color={item.color} text={item.text} />
                          </span>
                          <span>{item.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}

      <div className="visa-status-header mar-top-1">
        <div className="status-header-left">
          <div>
            <h2>PPI</h2>
          </div>
          <div>
            <button className="event-visa-btn">Details</button>
          </div>
        </div>
        <div className="status-header-right status-header-bclr">
          <h2>PREPARING</h2>
        </div>
      </div>

      <div className="visa-status-header mar-top-1">
        <div className="status-header-left">
          <div>
            <h2>Residence under Partnership</h2>
          </div>
          <div>
            <button className="event-visa-btn">Details</button>
          </div>
        </div>
        <div className="status-header-right status-header-signed">
          <h2>AGREEMENT SIGNED</h2>
        </div>
      </div>
    </div>
  );
};

export default VisaStatus;
