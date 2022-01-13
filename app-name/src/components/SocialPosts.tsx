import React from "react";


interface Post{
    title: string;
    thought:string;
}

function SocialPosts({title,thought}: Post) {
    return(
        <div className="SocialPosts">
        <input type="text" name="title">Title: {title}</input>
        <input type="text" name="thought">Thought: {thought}</input>
        <button type="submit" name="submitBtn">Add Post</button>
        </div>
    );
};

export default SocialPosts;