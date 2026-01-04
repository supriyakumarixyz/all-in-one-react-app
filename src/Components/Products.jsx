import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm product-card">
              <img
                src={product.images}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>

                <p className="card-text text-muted">
                  {product.description.slice(0, 60)}...
                </p>

                <div className="mt-auto">
                  <h6 className="text-success mb-2">
                    ₹ {product.price}
                  </h6>

                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-primary w-100"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
