import React from 'react';

import './AboutTeam.css';

// importing images
import DesignGay from "../../../../Assets/Images/Team/vecteezy_positive-male-entrepreneur-with-self-confident-satisfied_11564784_969.png"; 
import DesignGirl from "../../../../Assets/Images/Team/vecteezy_joyful-profile-girl-holding-a-tablet-in-her-hands-and-smiling_3491928.png"; 
import MangementGay from "../../../../Assets/Images/Team/Manzoni,-Mirko 1.png"; 



const index = () => {
    return (
        <div className=' container-fluid AboutTeam overflow-hidden d-flex justify-content-center'>
            <div className=' container row'>
                <div className='col-12 d-flex justify-content-between pt-4 ps-3 pe-3'>
                    <div href='#'>
                        <h2>Meet Our</h2>
                        <span>Team</span>
                    </div>
                    <div className='pt-4'>
                        <a href="#">See all</a>    
                    </div>
                </div>
                <div className='col-12 row justify-content-between h-75'>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-center mt-5 align-items-end'>
                            <div className='AboutTeamImg pt-5'>
                                <img src={DesignGay} alt="DesignGay"/>   
                            </div>
                            <div className='AboutTeamInfo DesignGayInfo align-self-center ms-5'>
                                <p>Alex Morphi</p>
                                <h3>Designer</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 mt-5 md-5 mt-md-0 mb-md-0'>
                        <div className='d-flex justify-content-center align-items-start'>
                            <div className='AboutTeamInfo CeoInfo me-5'>
                                <p>Sara Janson</p>
                                <h3>CEO</h3>
                            </div>
                            <div className='AboutTeamImg'>
                                <img src={DesignGirl} alt="DesignGirl"/>   
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-5 mt-md-0'>
                        <div className='d-flex justify-content-end align-items-start pb-5 mb-5'>
                            <div className='AboutTeamInfo mangementInfo align-self-center me-5'>
                                <p>Jan Sina</p>
                                <h3>Manegment</h3>
                            </div>
                            <div className='AboutTeamImg mangementImg'>
                                <img src={MangementGay} alt="MangementGay"/>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;