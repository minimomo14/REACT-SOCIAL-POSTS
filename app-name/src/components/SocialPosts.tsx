import React, { useState } from "react";
import Post from "../model/Post"
import PostInList from "./PostInList";
import PostForm from "./PostForm";
import "./SocialPosts.css";


// SocialPost.tsx = Parent
// DO BOOLEAN HERE for onClose
// const [active, setActive] = useState(false);
// if (active) {}

function SocialPosts() {
    const [socialPost, setSocialPost] = useState<Post[]>([
        {title: "My brain is broke", thought: "I think REACT is broke my brain!", isClose:false},
        {title: "What ?!!!", thought: "This is make no sense ughhhhh ", isClose:false},
        {title: "GIRL!!", thought: "What are you trying to do here?", isClose:true}
    ])

    function handlePostFormSubmit(post: Post): void {
        setSocialPost(prev => [...socialPost, post])
    }

    function handlePostFormDelete(index: number) {
        setSocialPost(prev => [...prev.slice(0,index), ...prev.slice(index+1)])
    }

    return(
        <div className="SocialPosts">
            <h1>My Thoughts</h1>
            <button type="submit" id="newThoughtBtn">New thought</button>
            <div className="SocialPosts__posts">
            {socialPost.map((post, i)=>
            <PostInList key={i} posts={post} onDelete={()=> handlePostFormDelete(i)}/>)}
            </div>
            <PostForm onSubmit={handlePostFormSubmit} />
        </div>
    );
};

export default SocialPosts;