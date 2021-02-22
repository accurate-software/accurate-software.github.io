import React, { Children } from 'react';

const LoaderPage: React.FC = props => {
  return (
    <div className='loader-page d-flex justify-content-center align-items-center flex-column'>

      
       {props.children}       
      

    </div> 
  );
}

export default LoaderPage;