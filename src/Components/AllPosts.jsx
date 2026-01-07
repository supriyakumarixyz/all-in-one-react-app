import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  const navigate =useNavigate();

  const handleComment=(id)=>{
    navigate(`/comments/${id}`);
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || [])); // safe fallback
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts found for this user.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-body bg-dark text-white">
              <h5>{post.id} {post.title}</h5>
              <p>{post.body}</p>
              <small>
                👍 {post.reactions?.likes ?? 0} | 👎 {post.reactions?.dislikes ?? 0} | 👁 {post.views ?? 0}
              </small>
              <button onClick={()=>handleComment(post.id)} className="btn btn-danger ms-2">Comments</button>
            </div>
          </div>
        ))
      )}
      <Link to="/posts" className="btn btn-outline-primary mt-3">
     Back to Post
   </Link>

    </div> 
  );
}

export default AllPosts;
