import React from 'react';

import slider from "../../../../Assets/Images/slider.png" ;
import "./Slider.css";

const index = () => {
    return (
        <div className='continer'>
            <div className='img-box'>
                <img src={slider} alt="slider" />    
            </div>
        </div>
    );
};

export default index;