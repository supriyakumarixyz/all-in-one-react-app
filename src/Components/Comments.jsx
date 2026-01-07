import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"

function Comment() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}/comments/`)
      .then((res) => res.json()).then((res) => setComments(res.comments))
  }, [id])
  return (
    <>
      <Link to="/posts" className="btn btn-outline-primary mt-3">
        Back to Post
      </Link>
      <div class="container mt-4">
        <h5 class="mb-3">Comments</h5>
      </div>
       {comments.length === 0 ? (
        <p>No comments found for this user.</p>
      ) : 
      (
        comments.map((comment) => {
          return (
            <>
              <div key={comment.id} class="card mb-3 shadow-sm">
                <div class="card-body d-flex align-items-start">
                 <div>
                  <div class="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                    style={{ width: "40px", height: "40px", fontWeight: "bold" }}>
                    {comment.user.username.charAt(0).toUpperCase()}
                    </div>
                    <div>
            <h6 className="mb-1">{comment.user.username}</h6>
            <p className="mb-1">{comment.body}</p>
            <small className="text-muted">2 mins ago</small>
          </div>
                  </div>
                </div>
              </div>
            </>
          )
        }

        )
      )
      }

    </>
  )
}

export default Comment

