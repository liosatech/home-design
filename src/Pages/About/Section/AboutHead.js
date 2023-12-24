import React from 'react';

import "./AboutHead.css";

const AboutHead = () => {
    return (
        <div className='d-flex flex-column  container-fluid justify-content-center overflow-hidden'>
            <div className='About-head position-relative container'>
                <div className='d-flex flex-column justify-content-center align-items-center pt-1 pb-1'>
                    <h3>About</h3>
                    <div className='d-flex justify-content-center'>
                        <a className='me-3' href="/">home</a>
                        <span>About</span>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHead;