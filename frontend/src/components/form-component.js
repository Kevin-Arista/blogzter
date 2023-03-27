import React from "react";

function BlogForm(props){
    return(
        <div className="BlogForm">
            <form action="" method="post">
            <label for="blog_title">Title:</label>
            <input name="blog_title"type="text"/>
            <br/>
            <label for="blog_author">Author:</label>
            <input name="blog_author"type="text"/>
            <br/>
            <label for="blog_content">Content:</label>
            <input name="blog_content"type="text"/>
            <br/>
            <input type="submit" value="Submit" />
            </form>    
        </div>
    );
}

export default BlogForm;