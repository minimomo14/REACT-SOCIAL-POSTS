import React, { FormEvent, useState } from "react";
import Post from "../model/Post";
import "./PostForm.css";
import SocialPosts from "./SocialPosts";

interface Props {
    onSubmit: (post: Post) => void;
}

function PostForm({onSubmit}: Props) {

    const [title, setTitle] = useState("REACT is FUN!!");
    const [thought, setThought] = useState("I thought REACT was fun too!!");
    const [close, setClose] = useState(false);

    function handlePostFormSubmit(e: FormEvent) {
        e.preventDefault();

        const newPost: Post = {
            title: title,
            thought: thought,
            isClose: close
        };

        onSubmit(newPost);
        //Reset form
        setTitle("");
        setThought("");
        setClose(false);
    }

    return(
        <div className="PostForm" onSubmit={handlePostFormSubmit}>
            
            <form>
                                               
                <p>
                    <label htmlFor="PostForm__title">Title:</label>
                    <input id="PostForm__title" type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
                </p>

                <p>
                    <label htmlFor="PostForm__thought">Thought:</label>
                    <input id="PostForm__thought" type="text" 
                    value={thought}
                    onChange={e => setTitle(e.target.value)}/>
                </p>

                <p>
                    <label htmlFor="PostForm__close">close?</label>
                    <input id="PostForm__close" type="checkbox" 
                    checked={close}
                    onChange={e => setClose(e.target.checked)}/>
                </p>
            
            
            </form>
        </div>
    );
};

export default PostForm;