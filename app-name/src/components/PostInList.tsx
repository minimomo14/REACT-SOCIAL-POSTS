import React from "react";
import Post from "../model/Post"

interface postProps {
    posts: Post;
}

function PostInList({posts}: postProps) {
    return(
        <div>
            
            <table>
                <table>{posts.title}</table> <table>{posts.thought}</table>
                <button type="submit">Add Thought</button>
            </table>
        </div>
    );

};

export default PostInList;