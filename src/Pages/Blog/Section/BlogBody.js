import React from 'react';
import BlogCard from '../../../Components/Card/BlogCard';

import "./BlogBody.css";

// importing imgs
import blogeCardImg1 from "../../../Assets/Images/News/3d-home-wallpaper-500x500 1.png";
import blogeCardImg2 from "../../../Assets/Images/News/courtyards-the-heart-of-multi-generational-houses-in-india_1 1.png";
import blogeCardImg3 from "../../../Assets/Images/News/False Ceiling Designs _ Simple False Ceiling designs For Living Room _ Gypsum Ceiling 1.png";
import blogeCardImg4 from "../../../Assets/Images/News/the-evolution-of-large-scale-windows-towards-unobstructed-uninterrupted-views_3 1.png";


const BlogBody = () => {
    return (
        <div>
            <div className='mt-5 container-fluid d-flex justify-content-center blogbody'>
                <div className=' container pt-5 pb-5 row justify-content-center align-content-center'>
                    <div className='col-6 col-md-3'>
                        <BlogCard img={blogeCardImg1} title="blogeCardImgOne"/>
                    </div>
                    <div className='col-6 col-md-3'>
                        <BlogCard img={blogeCardImg2} title="blogeCardImgTow"/>
                    </div>
                    <div className='col-6 col-md-3'>
                        <BlogCard img={blogeCardImg3} title="blogeCardImgtree"/>
                    </div>
                    <div className='col-6 col-md-3'>
                        <BlogCard img={blogeCardImg4} title="blogeCardImgFour"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBody;