import React from 'react';
import Logo from '../../../Assets/Images/Logo.png';

import './Header.css';

const Index = () => {
  return (
    <header className='d-flex flex-row justify-content-center'>
      <div className='container d-flex flex-row justify-content-center align-items-start'>
        <div className='d-flex pt-4 w-100 justify-content-center'>
          <h3 className='me-4'>
            <a href='#'>Submit Project</a>
          </h3>
          <h3>
            <a href='#'>Advertise</a>
          </h3>
        </div>
        <div className='d-flex justify-content-center m-auto'>
          <div className='img-box'>
            <img src={Logo} alt='logo' />
          </div>
        </div>
        <div className='d-flex pt-4 justify-content-end w-100'>
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

export default Index;
