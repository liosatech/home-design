import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Menu.css";

const index = () => {
    return (
        <div className='navBar'>
            <div className='container d-flex justify-content-center mt-3'>
                <ul className='d-flex justify-content-center'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Blog</a>
                    </li>
                    <li>
                       <a href='#'>Project</a> 
                    </li>
                    <li>
                        <a href='#'>About Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default index;

