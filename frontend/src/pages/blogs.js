import React, {useEffect, useState} from 'react';
import BlogComponent from '../components/blog-component';

function Blogs(props){
    return(
        <div className = "BlogPage">
            <h1>Latest!</h1>
            <BlogComponent></BlogComponent>
        </div>
    );
}

export default Blogs;