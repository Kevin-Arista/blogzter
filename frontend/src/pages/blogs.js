import React, {useEffect, useState} from 'react';
import BlogComponent from '../components/blog-component';
import axios from 'axios';


function Blogs(props){
    return(
        <div className = "BlogPage">  
            <BlogComponent></BlogComponent>
        </div>
    );
}

export default Blogs;