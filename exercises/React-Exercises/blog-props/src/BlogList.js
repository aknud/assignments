import React from "react";
import BlogPost from "./BlogPost";


const BlogList = () => {
    return (
        <div>
            <BlogPost />
            <div className="btn-container">
                <button className="more-posts-btn">
                    Older Posts 
                    <i class='fas fa-long-arrow-alt-right'></i>
                </button>
            </div>
        </div>
    )
}

export default BlogList;