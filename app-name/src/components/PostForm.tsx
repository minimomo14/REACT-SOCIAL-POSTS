import React, { FormEvent, useState } from "react";
import Post from "../model/Post";
import "./PostForm.css";
import SocialPosts from "./SocialPosts";

interface Props {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

function PostForm({ onSubmit, onClose }: Props) {
  const [title, setTitle] = useState("REACT is FUN!!");
  const [thought, setThought] = useState("I thought REACT was fun too!!");

  function handlePostFormSubmit(e: FormEvent) {
    e.preventDefault();

    const newPost: Post = {
      title: title,
      thought: thought,
    };

    onSubmit(newPost);
    //Reset form
    setTitle("");
    setThought("");
  }

  return (
    <div className="PostForm" onSubmit={handlePostFormSubmit}>
      <form>
        {/* i need onclick={displayNone} or something here
                position: absolude */}
    <div className="PostForm__Container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="X-fill"
          viewBox="0 0 16 16"
          onClick={onClose}
        >
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z" />
        </svg>

        
          <p>
            <label htmlFor="PostForm__title">Title:</label>
            <input
              id="PostForm__title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </p>

          <p>
            <label htmlFor="PostForm__thought">Thought:</label>
            <input
              id="PostForm__thought"
              type="text"
              value={thought}
              onChange={(e) => setThought(e.target.value)}
            />
          </p>
          <button type="submit">Add Post</button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
