import React, {useState} from 'react';
import { Row, Col } from 'antd';
import DocumentButtons from './DocumentButtons';
import DocumentFormOne from './DocumentFromOne';
import DocumentFormTwo from './DocumentFromTwo';



const DocumentComponent = () => {
     const [showTable, setShowTable] = useState(false);

     return (
          <div className="container">
         <DocumentButtons
         showTable={showTable}
         setShowTable={setShowTable}
         />
         {
             showTable === false && 
             <DocumentFormOne />
         }
         {
              showTable === true &&
              <DocumentFormTwo />
         }
         
         
    </div>
    );
}

  export default DocumentComponent;