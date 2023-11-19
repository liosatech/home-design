import React from 'react';

import "./Card.css";

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-fram'>
                <div className='card-img'>
                    <img src={props.cardImg} alt={props.cardTitle} />
                </div>
            </div>
            <h3 className='Card-text'>
                {props.cardTitle}
            </h3>      
        </div>
    );
};

export default Card;