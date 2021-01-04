import React, { useState } from "react";

const Admission = ({ data }) => {
  return (
    <div className="visa-status-header mtb-6rem">
      <div className="status-header-left">
        <div>
          <h2>{data.universityName}University of Auckland </h2>
          <p>
            {data.enrolledProgram}, {data.description}, {data.studentNo}
          </p>
        </div>
      </div>
      <div className="status-header-right status-header-bclr">
        <h2>{data.ftsSubmitted === true ? "APPLIED" : "PENDING"}</h2>
      </div>
    </div>
  );
};

export default Admission;
