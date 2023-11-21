import React from 'react';

import './AboutTeam.css';

const index = () => {
    return (
        <div className=' container-fluid AboutTeam overflow-hidden d-flex justify-content-center'>
            <div className=' container row'>
                <div className='col-12 d-flex justify-content-between pt-2 ps-3 pe-3'>
                    <div href='#'>
                        <h3>Meet Our</h3>
                        <span>Team</span>
                    </div>
                    <a href="#">See all</a>
                </div>
            </div>
        </div>
    );
};

export default index;