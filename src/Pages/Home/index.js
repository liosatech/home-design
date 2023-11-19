import React from 'react';

import "./Home.css";

// import Sections
import Slider from './Sections/Slider';
import Project from './Sections/Project';

const index = () => {
    return (
        <div className='body'>
            <Slider />
            <Project />
        </div>
    );
};

export default index;