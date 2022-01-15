import React from "react";
import Post from "../model/Post";
import SocialPosts from "./SocialPosts";

interface postProps {
  posts: Post;
  onDelete: () => void;
}

function PostInList({ posts, onDelete }: postProps) {
  const customStyle = {};

  // close btn needs to be close onClink

  return (
    <div className="PostInlist">
      <section className="PostInList_container">
        <h2>Title: {posts.title}</h2>
        <h3>Thought: {posts.thought}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="trash-fill"
          viewBox="0 0 16 16"
          onClick={onDelete}
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </section>
    </div>
  );
}

export default PostInList;
