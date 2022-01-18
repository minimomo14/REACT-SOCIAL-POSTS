import React, { useEffect, useState } from "react";
import Post from "../model/Post";
import PostInList from "./PostInList";
import PostForm from "./PostForm";
import "./SocialPosts.css";
import Modal from 'react-modal';

// SocialPost.tsx = Parent
// DO BOOLEAN HERE for onClose
// const [active, setActive] = useState(false);
// if (active) {}

const styleContainer = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
};

function SocialPosts() {
  const [socialPost, setSocialPost] = useState<Post[]>([
    { title: "My brain is broke", thought: "I think REACT is broke my brain!" },
    { title: "What ?!!!", thought: "This is make no sense ughhhhh " },
    { title: "GIRL!!", thought: "What are you trying to do here?" },
  ]);

  const [hidden, setHidden] = useState(false);

  const [formOpen, setFormOpen] = useState(false);


  useEffect(() => {
    Modal.setAppElement("formContainer")
  });

  function handlePostFormSubmit(post: Post): void {
    setSocialPost((prev) => [...socialPost, post]);
    setHidden(false);
    setFormOpen(false);
  }

  function handlePostFormDelete(index: number) {
    setSocialPost((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  }

  return (
    <div className="SocialPosts">
      <h1>My Thoughts</h1>
      <button className="newThought" onClick={() => setHidden(true)}>
        New Thought
      </button>
      <div className="SocialPosts__container">
        {socialPost.map((post, i) => (
          <PostInList
            key={i}
            posts={post}
            onDelete={() => handlePostFormDelete(i)}
          />
        ))}
      </div>
      <div className="formContainer">
        <Modal isOpen={formOpen} style={styleContainer}>
          {hidden ? <PostForm onSubmit={handlePostFormSubmit} onClose={() => setHidden(false)}/> : null}
        </Modal>
      
    </div>
    </div>
  );
}

export default SocialPosts;
