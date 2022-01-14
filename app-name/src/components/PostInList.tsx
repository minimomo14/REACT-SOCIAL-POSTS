import React from "react";
import Post from "../model/Post"
import SocialPosts from "./SocialPosts";

interface postProps {
    posts: Post;
    onDelete: () => void;
}

function PostInList({posts, onDelete}: postProps) {
    
    const customStyle = {

    }
    
    // close btn needs to be close onClink
    let addPosts = "";
    if (posts.isClose) {
        addPosts += " SocialPosts--close";
    }
    
    return(
        <div className={"SocialPosts" + addPosts} onClick={onDelete}>
            
            
        </div>
    );

};

export default PostInList;