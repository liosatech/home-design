import React from 'react';

import "./AboutHead.css";

const AboutHead = () => {
    return (
        <div className='d-flex flex-column  container-fluid justify-content-center pt-5'>
            <div className='About-head position-relative container'>
                <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center pt-2 pb-3'>
                    <h3>About</h3>
                    <br />
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