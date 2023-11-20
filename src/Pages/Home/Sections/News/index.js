import React from 'react';
import Card from "../../../../Components/Card/Card";
import CardImg from "../../../../Assets/Images/Big-card.png";

import "./News.css";


const index = () => {
    return (
        <div className='row container-fluid overflow-hidden'>
            <div className='col-12 titles d-flex justify-content-center'>
                <a className=' position-relative' href="#">
                    <h2>Our Latest</h2>
                    <span>News</span>
                </a>
            </div>
            <div className='col-12'>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                        <Card  cardImg={CardImg} cardTitle="cardOne"/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;