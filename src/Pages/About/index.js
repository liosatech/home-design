import React from 'react';
import AboutHead from './Section/AboutHead';

import "./About.css";

const AboutPage = () => {
    return (
        <div className='d-flex justify-content-center flex-column'>
            <AboutHead />
            <div className='pt-3 mt-3 container-fluid About d-flex justify-content-center'>
                <div className='continer'>
                    <div className='row justify-content-center align-content-start'>
                        <div className='col-12  aboutInfoTitel'>
                            <h3>Home Design Group</h3>
                            <span>Open In : 1999</span>
                            <br />
                            <span>Ceo : Mike jakson</span>
                        </div>
                        <div className=' col-12 aboutInfoText'>
                            <p>
                            home design is compny working on improving you home life.home design is compny working on improving you home life.home design is compny working on improving you home life.home design is compny working on improving you home life.home design is compny working on improving you home life.
                            </p>
                            <span>you can contact us by :</span>
                            <h4>HomeDesignGroup@gmail.com</h4>
                            <h4>935*******45 or 935*******44</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;