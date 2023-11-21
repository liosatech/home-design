import React from 'react';

import "./MiniCard.css";

const MiniCard = (props) => {
    return (
        <div className='d-flex justify-content-center align-content-start'>
            <div className='miniCard-img-box'>
              <img src={props.MiniCardImg} alt={props.MiniCardtite} />
            </div>
            <div className='position-relative '>
                <p className='ms-4 mt-3'>{props.MiniCardText}</p>
                <div className='black-box'></div>
            </div>
        </div>
    );
};

export default MiniCard;