import React, { useState } from "react";
import Post from "../model/Post"
import PostInList from "./PostInList";

// DO BOOLEAN HERE for onClose
// const [active, setActive] = useState(false);
// if (active) {}

function SocialPosts({title,thought}: Post) {
    const [socialPost, setSocialPost] = useState<Post[]>([
        {title: "My brain is broke", thought: "I think REACT is broke my brain!"},
        {title: "What ?!!!", thought: "This is make no sense ughhhhh "},
        {title: "GIRL!!", thought: "What are you trying to do here?"}
    ])
    return(
        <div className="SocialPosts">
            {socialPost.map((post, i)=>
            <PostInList key={i} posts={post} />)}
        
        </div>
    );
};

export default SocialPosts;