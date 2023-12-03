import React from 'react';

import "./Home.css";

// import Sections
import Slider from './Sections/Slider';
import Project from './Sections/Project';
import News from './Sections/News';
import AboutTeam from './Sections/AboutTeam';
import WhyUS from './Sections/WhyUs';
import SearchBox from '../../Components/Layout/Menu/SearchBox ';

const HomePage = () => {
    return (
        <div className='body'>
            <SearchBox/>
            <Slider />
            <Project />
            <News />
            <AboutTeam />
            <WhyUS />
        </div>
    );
};

export default HomePage;