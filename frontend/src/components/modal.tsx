import React from 'react';

interface myProps{
  title: string;  
}

const Modal: React.FC<myProps> = props => {
  return (
    <div className="modal-page">

     <div className="modal-dialog">

        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>  
          </div>

          {props.children}

        </div>

      </div>

    </div>
  );
}

export default Modal;