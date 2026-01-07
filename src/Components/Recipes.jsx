import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Recipes() {
  const [recipe, setRecipe] = useState([]);

  const navigate = useNavigate()
  
    // const handleTodo = (id) => {
    //   alert(`Add or update task with ID: ${id}`);
  
    // }

    const handleViewRecipe=(recipesId)=>{
    navigate(`/view-recipe/${recipesId}`);
    }
  
    useEffect(() => {
      fetch("https://dummyjson.com/recipes")
        .then((res) => res.json()).then((res) => setRecipe(res.recipes));
    }, [])
  return (
<div className="container mt-5">
      <div className="row g-4">
        {recipe.map((recipes) => (
          <div key={recipes.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={recipes.image}
                className="card-img-top"
                alt={recipes.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{recipes.name}</h5>
                <p className="card-text flex-grow-1">{recipes.description}</p>
                <button onClick={()=>handleViewRecipe(recipes.id)} className="btn btn-primary mt-2">View Recipe</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;






