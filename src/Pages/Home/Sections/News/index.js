import React from 'react';
import Card from "../../../../Components/Card/Card";
import CardImg from "../../../../Assets/Images/News/Big-card.png";
import MiniCard from '../../../../Components/Card/MiniCard';
import MiniCardImg from "../../../../Assets/Images/News/courtyards-the-heart-of-multi-generational-houses-in-india_1 1.png";
import MiniCardImgTow from "../../../../Assets/Images/News/operacion-entre-apartamentos-natura-futura-arquitectura_5 1.png";
import MiniCardImgtree from "../../../../Assets/Images/News/the-evolution-of-large-scale-windows-towards-unobstructed-uninterrupted-views_3 1.png";

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
                        <div className='col-12 col-md-6 row'>
                            <Card className='col-12'  cardImg={CardImg} cardTitle="cardOne"/> 
                            <Card className='col-12'  cardImg={CardImg} cardTitle="cardOne"/> 
                        </div>
                        <div className='col-2'>
                            {/* EXtra div */}
                        </div>
                        <div className='col-12 col-md-4 row News-column'>
                            <div className='row col-12 justify-content-center align-content-start'>
                                <div className='col-12 News-column-titel'>
                                    <h3>MOST VISITED</h3>
                                </div>
                                <div className='col-12 row'>
                                    <MiniCard className='col-12' 
                                    MiniCardText={"Courtyards: The Heart of Multi-Generational Houses in India"}
                                     MiniCardImg={MiniCardImg} MiniCardtite={"courtyards-the-heart"} />
                                    <MiniCard className='col-12' 
                                    MiniCardText={"Operations Within Apartments / Natura Futura Arquitectura"}
                                     MiniCardImg={MiniCardImgTow} MiniCardtite={"operacion-entre-apartamentos"} />
                                    <MiniCard className='col-12' 
                                    MiniCardText={"The Evolution of Large-Scale Windows: Towards Unobstructed, Uninterrupted Views"}
                                     MiniCardImg={MiniCardImgtree} MiniCardtite={"the-evolution"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;