import React from 'react';


const Banner: React.FC = props => {
  return (
    <div className="banner text-center">
      <div className='container'>
       {props.children}       
      </div>
    </div>   
  );
}

export default Banner;