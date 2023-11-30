import React from 'react';

import "./WhyUs.css";

const index = () => {
    return (
        <div className='why_us overflow-hidden'>
            <div className=' container'>
                <div className='row'>
                    <div className='col-12 col-md-5 d-flex justify-content-center '>
                        <div className='WhyUs-textbox'>
                            <h3>Why</h3>
                            <h3>HOME</h3>
                            <h3 className='color-header'>DESIGNER</h3>
                            <h3>GROUP</h3>
                        </div>
                    </div>
                    <div className='col-12 col-md-7'>
                        <p>Home Design Group is a large group of specialists and interior designers operating throughout Europe. In this collection, works such as interior design of the house, living room, bedroom, kitchen, bathroom and toilet are done. First, 3D designs are made in the software according to the customer's taste, and after that, after the customer's approval, we enter the implementation phase of the project. All our efforts are your satisfaction and building a more beautiful house to live in.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;