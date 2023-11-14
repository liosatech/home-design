import React from 'react';

import Logo from "../../../Images/Logo.png";
import "./Header.css";


const index = () => {


    return (
        <header className='d-flex flex-row justify-content-center'>
            <div className='container d-flex flex-row justify-content-center align-items-start'>    
                <div className='d-flex pt-4 w-25'>
                    <h3 className='me-4 '>
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
                <div className='d-flex justify-content-center w-50 m-auto'>
                    <div className='img-box'>
                        <img src={Logo} alt="logo" />    
                    </div>
                </div>
                <div className='d-flex pt-4 justify-content-end w-25'>
                    <button className='me-3 LogIn-btn'> 
                        Login
                    </button>
                    <button className='signUp-btn'>
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
};

export default index;