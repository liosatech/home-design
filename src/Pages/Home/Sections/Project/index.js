import React from 'react';

import "./Project.css";
import Card from '../../../../Components/Card/Card';
import CardImg from "../../../../Assets/Images/project/vecteezy_minimalist-interior-of-a-modern-living-room-in-3d-illustration_2070269 1.png";


const index = () => {


    return (
        <div className='container-flude projects d-flex justify-content-center'>
            <div className='row container'>
                <div className='col-12 d-flex justify-content-between'>
                    <div>
                        <a href="#">
                            More
                        </a>
                    </div>
                    <div>
                        <h2>
                            Our Latest
                            <br/>
                            <span>project</span>
                        </h2>
                    </div>
                </div>
                <div className='cards d-flex justify-content-center pt-5 '>
                    <Card  cardImg={CardImg} cardTitle="cardOne"/> 
                    <Card  cardImg={CardImg} cardTitle="cardOne"/>   
                    <Card  cardImg={CardImg} cardTitle="cardOne"/>     
                </div>
            </div>
        </div>
    );
};

export default index;