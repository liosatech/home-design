import React from 'react';

import "./Home.css";

// import Sections
import Slider from './Sections/Slider';
import Project from './Sections/Project';
import News from './Sections/News';
import AboutTeam from './Sections/AboutTeam';
import WhyUS from './Sections/WhyUs';

const index = () => {
    return (
        <div className='body'>
            <Slider />
            <Project />
            <News />
            <AboutTeam />
            <WhyUS />
        </div>
    );
};

export default index;