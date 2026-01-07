import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function CartDetails() {

  const [cardDetails, setCardDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/user/${id}`)
      .then(res => res.json())
      .then(res => setCardDetails(res.carts[0].products));
  }, [id])

  if (!cardDetails) {
    return <p className="text-center mt-5">Loading...</p>;

  }


  return (
    <>
      {
        cardDetails.map((val,index)=>{
          return(
            <div className="card shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <img
          src={val?.thumbnail}
          className="card-img-top p-3"
          alt={val?.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">Cart ID: {val.id}</h5>
          <p>Total Products: {val.totalProducts}</p>
          <p>Total Quantity: {val.totalQuantity}</p>
          <p>Total Price: ₹ {val.total}</p>

          <h6 className="mt-3">First Product:</h6>
          <p>Title: {val?.title}</p>
          <p>Price: ₹ {val?.price}</p>
          <p>Quantity: {val?.quantity}</p>
        </div>
      </div>
          )
        })
      }
      <Link to="/user-cart" className="btn btn-secondary w-100 mt-3">
        ⬅ Back to All Carts
      </Link>
    </>
  )
}

export default CartDetails;