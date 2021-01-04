import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import Admisssion from './Admission'



const AdmissionComponent = ({
     onGetEducationHistory,
     educationHistoryRes,

}) => {
     useEffect(() => {
          onGetEducationHistory()
     }, [onGetEducationHistory])

     return (
          <div className="container">
               {
                    educationHistoryRes && educationHistoryRes.items.length > 0 &&
                    educationHistoryRes.items.map((data, index) => {
                         return (
                              <Admisssion key={index} data={data} />
                         )
                    })
               }

          </div>
     )

};

export default AdmissionComponent;