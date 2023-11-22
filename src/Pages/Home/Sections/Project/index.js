import React from 'react';

import "./Project.css";
import Card from '../../../../Components/Card/Card';
import CardImg from "../../../../Assets/Images/project/vecteezy_minimalist-interior-of-a-modern-living-room-in-3d-illustration_2070269 1.png";


const index = () => {


    return (
        <div className='container-flude projects d-flex justify-content-center overflow-hidden'>
            <div className='row container porject-body'>
                <div className='col-12 d-flex justify-content-between align-content-end'>
                    <div className='mt-4'>
                        <a href="#">
                            More
                        </a>
                    </div>
                    <div>
                        <h2>
                            Our Latest 
                        </h2>
                        <span>project</span>
                    </div>
                </div>
                <div className='cards d-flex justify-content-center pt-5 '>
                    <Card  cardImg={CardImg} cardTitle="cardOne"/> 
                    <Card  cardImg={CardImg} cardTitle="cardOne"/>   
                    <Card  cardImg={CardImg} cardTitle="cardOne"/>     
                </div>
                <div className='d-flex justify-content-center align-items-center pagination pb-5'>
                    <button className='slectbutton'></button>
                    <button className='ms-4'></button>
                    <button className='me-4 ms-4'></button>
                    <button type="#"></button>
                </div>
            </div>
        </div>
    );
};

export default index;