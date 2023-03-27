import React, { useEffect, useState } from "react";
import axios from "axios";

function BlogComponent(props){
    const api = axios.create({
        baseURL: `http://localhost:4000`
        // baseURL: process.env.baseURL
      });
    
      let [blogList, setBlogList] = useState();
      
      api.get('/blogs').then(res =>{
        setBlogList(res.data)
        console.log(process.env.URL)
      });

      return(
        <div className="BlogComponent">
            {blogList?.map(blog => <div key={blog._id}>{blog.content}</div>)}
        </div>
      );
}

export default BlogComponent;