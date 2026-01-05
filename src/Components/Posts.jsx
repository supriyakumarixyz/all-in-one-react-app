import React, { useEffect, useState } from 'react';

function Posts() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((res) => setPost(res.posts)); // ✅ FIX
  }, []);

  return (
    <>
      {post.map((posts) => (
        <div className="card mb-3" key={posts.id}>
          <div className="card-body bg-dark text-white">

            <h5 className="card-title">
              {posts.title}
            </h5>

            <p className="card-text">
              {posts.body}
            </p>
            <small className="text-light ">
              👍 {posts.reactions.likes} | 👎 {posts.reactions.dislikes} | 👁 {posts.views}
            </small>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;

