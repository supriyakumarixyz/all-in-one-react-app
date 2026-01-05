import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {

  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((res) => setCarts(res.carts));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">

        {carts.map((cart) => (
          
          <div className="col-md-4 mb-4" key={cart.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <img
                src={cart.products[0]?.thumbnail}
                className="card-img-top p-3"
                alt={cart.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
                <h5 className="card-title">Cart ID: {cart.id}</h5>
                <p>Total Products: {cart.totalProducts}</p>
                <p>Total Price: ₹ {cart.total}</p>

                <Link
                  to={`/cart/${cart.id}`}
                  className="btn btn-primary w-100"
                >
                  View Cart Details
                </Link>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Cart;
