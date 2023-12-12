import React from 'react';

import "./BlogHead.css";

const BlogHead = () => {
    return (
        <div className='d-flex flex-column blog container-fluid justify-content-center pt-5'>
            <div className='blog-head position-relative container'>
                <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center pt-2 pb-3'>
                    <h3>Bloge</h3>
                    <br />
                    <div className='d-flex justify-content-center'>
                        <a className='me-3' href="/">home</a>
                        <span>Bloge</span>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHead;