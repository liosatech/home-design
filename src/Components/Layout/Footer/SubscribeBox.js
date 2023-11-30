import React from 'react';

import "./SubscribeBox.css";

const SubscribeBox = () => {
    return (
        <div className='container-fluid SubscribeBox d-flex justify-content-center pt-5 pb-5'>
            <div className='container bg-white row pt-4 pb-2 Subscribebody'>
                <div className='col-md-4 col-12 d-flex justify-content-center'>
                    <p>Subscribe to our <br /> newsletter, <br/> Don't let anything slip by.</p>
                </div>
                <div className='col-md-8 col-12 d-flex justify-content-center align-content-center position-relative inputBox'>
                    <input className='me-4' type="#" name="#" placeholder='Your email address' />
                    <button type="#">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default SubscribeBox;