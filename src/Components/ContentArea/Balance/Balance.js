import React, {useState} from 'react';
import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import { Tabs, Badge, Divider, Row, Col, Checkbox  } from 'antd';



const Balance = () => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
  return (
      <div className="mtb-6rem">
         <div style={{border: "1px solid #bfbfbf"}}>
         <div className="d-flex top-bar">
                 <div className="w-33 text-cen"><p>STAGE</p></div>
                 <div className="w-33 text-cen"><p>AMOUNT</p></div>
                 <div className="w-33 text-cen"><p>RECEIVED</p></div>
             </div>
             <div className="balnce-form-dark">
                 <div className="w-33 text-cen"><p>Stage 1</p></div>
                 <div className="w-33 text-cen"><p>1 800.00</p></div>
                 <div className="w-33 text-cen"><p>800.00</p></div>
             </div>
             <div className="balnce-form-light">
                 <div className="w-33 text-cen"><Checkbox onChange={onChange}>Tax inclusive</Checkbox></div> 
             </div>
             <div className="d-flex top-bar">
                 <div className="w-33 text-cen"><p>STAGE</p></div>
                 <div className="w-33 text-cen"><p>AMOUNT</p></div>
                 <div className="w-33 text-cen"><p>RECEIVED</p></div>
             </div>
             <div className="balnce-form-dark">
                 <div className="w-33 text-cen"><p>Stage 2</p></div>
                 <div className="w-33 text-cen"><p>900.00</p></div>
                 <div className="w-33 text-cen"><p>900.00</p></div>
             </div>
             <div className="balnce-form-light">
                 <div className="w-33 text-cen"><Checkbox onChange={onChange}>Tax inclusive</Checkbox></div> 
             </div>
             <div className="d-flex top-bar">
                 <div className="w-33 text-cen"><p>STAGE</p></div>
                 <div className="w-33 text-cen"><p>AMOUNT</p></div>
                 <div className="w-33 text-cen"><p>RECEIVED</p></div>
             </div>
             <div className="balnce-form-dark">
                 <div className="w-33 text-cen"><p>Stage 3</p></div>
                 <div className="w-33 text-cen"><p>900.00</p></div>
                 <div className="w-33 text-cen"><p>900.00</p></div>
             </div>
             <div className="balnce-form-light">
                 <div className="w-33 text-cen"><Checkbox onChange={onChange}>Tax inclusive</Checkbox></div> 
             </div>
             <div className="end-form">
                 <div>
                    <p>Deposit 0.00</p>
                    <p>Total: 2505.0000</p>
                    <p>Received: 1700.00</p>
                 </div>
             </div>
         </div>


         <div className="mar-top">
         <div style={{border: "1px solid #bfbfbf"}}>
         <div className="d-flex top-bar">
                 <div className="w-33 text-cen"><p>STAGE</p></div>
                 <div className="w-33 text-cen"><p>AMOUNT</p></div>
                 <div className="w-33 text-cen"><p>RECEIVED</p></div>
             </div>
             <div className="balnce-form-dark">
                 <div className="w-33 text-cen"><p>Stage 1</p></div>
                 <div className="w-33 text-cen"><p>1 800.00</p></div>
                 <div className="w-33 text-cen"><p>800.00</p></div>
             </div>
             <div className="balnce-form-light">
                 <div className="w-33 text-cen"><Checkbox onChange={onChange}>Tax inclusive</Checkbox></div> 
             </div>
             <div className="d-flex top-bar">
                 <div className="w-33 text-cen"><p>STAGE</p></div>
                 <div className="w-33 text-cen"><p>AMOUNT</p></div>
                 <div className="w-33 text-cen"><p>RECEIVED</p></div>
             </div>
             <div className="balnce-form-dark">
                 <div className="w-33 text-cen"><p>Stage 2</p></div>
                 <div className="w-33 text-cen"><p>900.00</p></div>
                 <div className="w-33 text-cen"><p>900.00</p></div>
             </div>
             <div className="balnce-form-light">
                 <div className="w-33 text-cen"><Checkbox onChange={onChange}>Tax inclusive</Checkbox></div> 
             </div>
             <div className="d-flex top-bar">
                 <div className="w-33 text-cen"><p>STAGE</p></div>
                 <div className="w-33 text-cen"><p>AMOUNT</p></div>
                 <div className="w-33 text-cen"><p>RECEIVED</p></div>
             </div>
             <div className="balnce-form-dark">
                 <div className="w-33 text-cen"><p>Stage 3</p></div>
                 <div className="w-33 text-cen"><p>900.00</p></div>
                 <div className="w-33 text-cen"><p>900.00</p></div>
             </div>
             <div className="balnce-form-light">
                 <div className="w-33 text-cen"><Checkbox onChange={onChange}>Tax inclusive</Checkbox></div> 
             </div>
             <div className="end-form">
                 <div>
                    <p>Deposit 0.00</p>
                    <p>Total: 2505.0000</p>
                    <p>Received: 1700.00</p>
                 </div>
             </div>
         </div>
         </div>
      </div>

      
  )
}

export default Balance;