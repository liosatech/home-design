import React from 'react';

import "./BlogCard.css";

const BlogCard = (props) => {
    return (
        <div className='BlogCard mt-4 mt-mb-0 d-flex flex-column jus justify-content-center align-content-center'>
            <img className='mt-2 mb-3' src={props.img} alt={props.title} />
            <h3>titel</h3>
        </div>
    );
};

export default BlogCard;