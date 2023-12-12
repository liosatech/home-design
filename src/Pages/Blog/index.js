import React from 'react';

import "./Blog.css";

// Import sections
import BlogHead from './Section/BlogHead';
import BlogBody from './Section/BlogBody';

const BlogPage = () => {
    return (
        <>
        <BlogHead />
        <BlogBody />
        </>
    );
};

export default BlogPage;