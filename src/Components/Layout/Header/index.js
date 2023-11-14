import React from 'react';

import Logo from "../../../Images/Logo.png";
import "./Header.css";


const index = () => {


    return (
        <div className='d-flex justify-content-center'>
            <div className=''>
                <h3>
                    <a href="#">
                    Submite Project
                    </a>
                </h3>
                <h3>
                    <a href="#">
                    Advertize
                    </a>
                </h3>
            </div>
            <div>
                <div className='img-box'>
                    <img src={Logo} alt="logo" />    
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='me-3'> 
                    Login
                </button>
                <button className='signUp-btn'>
                    Sign Up
                </button>

            </div>
        </div>
    );
};

export default index;