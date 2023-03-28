import axios from "axios";
import React, { useState } from "react";

function BlogForm(props){
    
    const [formData, setFormData] = useState({
       title: "",
       author: "",
       content: "" 
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/blogs/post", formData).then((res) => {
            console.log(res.status, res.data);
        });
    }

    return(
        
        <div className="BlogForm">
            
            <form onSubmit={handleSubmit}>
                <h1> What's on your mind? </h1>

                <label htmlFor="title">Title</label>
                <br/>
                <input onChange={(e)=> setFormData({...formData, title: e.target.value})} value={formData.title} type="text" name="title" id="title" />
                <br/>
                <br/>
                <br/>
                <label htmlFor="author">Author</label>
                <br/>
                <input onChange={(e)=> setFormData({...formData, author: e.target.value})} value={formData.author} type="text" name="author" id="author" />
                <br/>
                <br/>
                <br/>
                <label htmlFor="content">Content</label>
                <br/>
                <textarea onChange={(e)=> setFormData({...formData, content: e.target.value})} value={formData.content} name="content" id="content"></textarea>
                <br/>
                <br/>
                <br/>
                <input type="submit" value="Submit" />
            </form>    
        </div>
    );
}

export default BlogForm;