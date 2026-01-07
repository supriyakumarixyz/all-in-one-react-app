import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ViewReceipe() {
  const { id } = useParams();
  const [viewRecipe, setViewRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(res => setViewRecipe(res))
      .catch(err => console.error(err));
  }, [id]);

  if (!viewRecipe) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <img
              src={viewRecipe.image}
              alt={viewRecipe.name}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{viewRecipe.name}</h5>
              <p className="card-text flex-grow-1">{viewRecipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/recipes" className="btn btn-primary mt-3">
        Back to Recipes Page
      </Link>
    </div>
  );
}

export default ViewReceipe;
