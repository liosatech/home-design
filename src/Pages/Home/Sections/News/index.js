import React from 'react';
import Card from "../../../../Components/Card/Card";
import MiniCard from '../../../../Components/Card/MiniCard';

// IMPORTING IMAGES
import CardImg from "../../../../Assets/Images/News/Big-card.png";
import MiniCardImg from "../../../../Assets/Images/News/courtyards-the-heart-of-multi-generational-houses-in-india_1 1.png";
import MiniCardImgTow from "../../../../Assets/Images/News/operacion-entre-apartamentos-natura-futura-arquitectura_5 1.png";
import MiniCardImgtree from "../../../../Assets/Images/News/the-evolution-of-large-scale-windows-towards-unobstructed-uninterrupted-views_3 1.png";
import PRODUCTSImg from "../../../../Assets/Images/News/False Ceiling Designs _ Simple False Ceiling designs For Living Room _ Gypsum Ceiling 1.png"
import PRODUCTSImgtow from "../../../../Assets/Images/News/home-decor_200_pexels 1.png";
import PRODUCTSImgtree from "../../../../Assets/Images/News/3d-home-wallpaper-500x500 1.png";



import "./News.css";


const index = () => {
    return (
        <div className='row news container-fluid overflow-hidden'>
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
                            <Card className='card col-12'  cardImg={CardImg} cardTitle="cardOne"/>
                                <h4>
                                "Courtyards: The Heart of Multi-Generational Houses in India    
                                </h4> 
                            <Card className='card col-12'  cardImg={CardImg} cardTitle="cardOne"/> 
                                <h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </h4>
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
                            <div className='row col-12 justify-content-center align-content-start'>
                                <div className='col-12 News-column-titel PRODUCTS'>
                                    <h3>MOST PRODUCTS</h3>
                                </div>
                                <div className='col-12 row'>
                                    <MiniCard className='col-12' 
                                    MiniCardText={"Courtyards: The Heart of Multi-Generational Houses in India"}
                                     MiniCardImg={PRODUCTSImg} MiniCardtite={"False Ceiling"} />
                                    <MiniCard className='col-12' 
                                    MiniCardText={"Operations Within Apartments / Natura Futura Arquitectura"}
                                     MiniCardImg={PRODUCTSImgtow} MiniCardtite={"operacion-entre-apartamentos"} />
                                    <MiniCard className='col-12' 
                                    MiniCardText={"The Evolution of Large-Scale Windows: Towards Unobstructed, Uninterrupted Views"}
                                     MiniCardImg={PRODUCTSImgtree} MiniCardtite={"the-evolution"} />
                                </div>
                            </div>
                            <div className='row col-12 justify-content-center align-content-start'>
                                <div className='col-12 News-column-titel PRODUCTS'>
                                    <h3>ARCHITECTURE EVENTS</h3>
                                </div>
                                <div className='col-12 row'>
                                    <MiniCard className='col-12' 
                                    MiniCardText={"Courtyards: The Heart of Multi-Generational Houses in India"}
                                     MiniCardImg={PRODUCTSImg} MiniCardtite={"False Ceiling"} />
                                    <MiniCard className='col-12' 
                                    MiniCardText={"Operations Within Apartments / Natura Futura Arquitectura"}
                                     MiniCardImg={PRODUCTSImgtow} MiniCardtite={"operacion-entre-apartamentos"} />
                                    <MiniCard className='col-12' 
                                    MiniCardText={"The Evolution of Large-Scale Windows: Towards Unobstructed, Uninterrupted Views"}
                                     MiniCardImg={PRODUCTSImgtree} MiniCardtite={"the-evolution"} />
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