import React from 'react';

import "./Footer.css";

const Index = () => {
    return (
        <>
            <div className='w-100 d-flex justify-content-center'>
                <div className=' container row col-12 justify-content-center'>
                    <div className='col-12 col-md-6 Footer-text mb-4 mb-md-0'>
                        <h3 className='mb-3'>Let`s work together</h3>
                        <p className='mb-5'>Make your dream come true by
                        <br/> Building your future home</p>
                        <button>get your free quote today</button>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='me-5 d-flex flex-column justify-content-start align-items-center'>
                                <h3 className='text-start'>Home Desiner</h3>
                                <span className='text-start mt-4 w-100'>SUPPORT</span>
                                <span className='text-start mt-3 w-100'>Contact Us</span>
                                <span className='text-start mt-3 w-100'>Terms & </span>
                                <span className='text-start mt-3 w-100'>Conditions</span>
                                <span className='text-start mt-3 w-100'>Privacy Policy</span>
                                <span className='text-start mt-3 w-100'>Abou Us</span>
                            </div>
                            <div className='ms-5 d-flex flex-column justify-content-start align-items-center'>
                                <h3 className='text-start'>COMMUNITY</h3>
                                <span className='text-start mt-4 w-100'>☻</span>
                                <span className='text-start mt-2 w-100'>☻</span>
                                <span className='text-start mt-2 w-100'>☻</span>
                                <span className='text-start mt-2 w-100'>☻</span>
                                <span className='text-start mt-2 w-100'>☻</span>
                                <span className='text-start mt-2 w-100'>☻</span>
                                <span className='text-start mt-2 w-100'>☻╬</span>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className='d-flex justify-content-center mt-5 pt-2 pb-2 container-fluid bg-light'>
                <span>Copyright © 2023 Home Designer Group</span>
            </div>
        </>
    );
};

export default Index;