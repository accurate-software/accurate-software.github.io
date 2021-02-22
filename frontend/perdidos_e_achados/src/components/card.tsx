import React, { Children } from 'react';

import icon_map_point from '../assets/icon_map_point.svg';

interface myProps{
  city: string;
  time: string;
  photo_background: string;
  category: string;
  type_class: string;
  hasReward: string;
}

const Card: React.FC<myProps> = props => {
  return (
    <div className="card mb-2">
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex flex-row header">

          <div className=''>
            <img src={icon_map_point} />
          </div>
          <div className='d-flex flex-column'>
            <span className='local text-truncate'>{props.city}</span>
            <span className='time'>{props.time}</span>
          </div>

        </li>
        <li className="list-group-item photo" style={{ backgroundImage: `url(${props.photo_background})` }}></li>
        <li className={`list-group-item footer ${props.type_class} d-flex flex-column`}>
          <span>{props.category}</span>
          <span className='reward'>
          {(props.hasReward == '1') ? "$$Recompensa" : ""}        
          </span>  
        </li>
      </ul>
    </div> 
  );
}

export default Card;