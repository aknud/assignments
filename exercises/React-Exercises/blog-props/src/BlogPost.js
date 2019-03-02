import React from "react";
import blogs from "./blogs.json";

const BlogPost = () => {
    let mappedBlogs = blogs.map(blog => {
        return (
            <div className="blog-container">
                <h1>{blog.title}</h1>
                <h2>{blog.subtitle}</h2>
                <p>Posted by <b>Start Bootstrap</b> on <span className="date">{blog.date}</span></p>
            </div>
        )
    })
    return (
        <div>
            {mappedBlogs}
        </div>
    )
}

export default BlogPost;