import axios from "axios";
import React, { useState } from "react";
import "./form-component.css";

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
        setFormData({
            title: "",
            author: "",
            content: ""
        })
        alert("Your blog has been submitted, check it out on the Blogs page!");
    }

    return(
        
        <div className="BlogForm">
            
            <form onSubmit={handleSubmit}>
                <h3>Title</h3>
                <input onChange={(e)=> setFormData({...formData, title: e.target.value})} value={formData.title} type="text" name="title" id="title" />
                <br/>
                <h3>Author</h3>
                <input onChange={(e)=> setFormData({...formData, author: e.target.value})} value={formData.author} type="text" name="author" id="author" />
                <br/>
                <h3>Content</h3>
                <textarea onChange={(e)=> setFormData({...formData, content: e.target.value})} value={formData.content} name="content" id="content"></textarea>
                <br/>
                <input id="button" type="submit" value="Submit" />
            </form>    
        </div>
    );
}

export default BlogForm;