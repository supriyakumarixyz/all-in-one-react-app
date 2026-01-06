import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Posts() {
  const { id } = useParams(); // user id from URL
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/user/${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || [])); // safe fallback
  }, [id]);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts found for this user.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-body bg-dark text-white">
              <h5>{post.title}</h5>
              <p>{post.body}</p>
              <small>
                👍 {post.reactions?.likes ?? 0} | 👎 {post.reactions?.dislikes ?? 0} | 👁 {post.views ?? 0}
              </small>
            </div>
          </div>
        ))
      )}

      {/* Back button */}
      <Link to="/users" className="btn btn-secondary mt-3">
        ⬅ Back to Users
      </Link>
    </div>
  );
}

export default Posts;
