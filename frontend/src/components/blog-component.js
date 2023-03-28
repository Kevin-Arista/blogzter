import React, { useEffect, useState } from "react";
import axios from "axios";
import './blog-component.css'

function BlogComponent(props){
    const api = axios.create({
        baseURL: `http://localhost:4000`
      });
    
      let [blogList, setBlogList] = useState();
      
      api.get('/blogs').then(res =>{
        setBlogList(res.data)
      });

      return(
        <div className="BlogComponent">
            {blogList?.reverse().map(blog => 
            <div className="card" key={blog._id}>
              <h2>{blog.title}</h2>
              <h5>by {blog.author}</h5>
              <p>{blog.content}</p>
            </div>
            )}
            
        </div>
      );
}

export default BlogComponent;