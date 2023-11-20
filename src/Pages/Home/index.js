import React from 'react';

import "./Home.css";

// import Sections
import Slider from './Sections/Slider';
import Project from './Sections/Project';
import News from './Sections/News';

const index = () => {
    return (
        <div className='body'>
            <Slider />
            <Project />
            <News />
        </div>
    );
};

export default index;