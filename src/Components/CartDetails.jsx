import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function CartDetails() {

  const[cardDetails,setCardDetails]=useState(null);

  const {id} =useParams();

 useEffect(()=>{
  fetch(`https://dummyjson.com/carts/${id}`) 
    .then(res => res.json())
    .then(res => setCardDetails(res));
}, [id])

  if(!cardDetails){
      return <p className="text-center mt-5">Loading...</p>;

  }
    const firstProduct = cardDetails.products[0]; // first product


  return (
    <>
   <div className="card shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
      <img
        src={firstProduct?.thumbnail}
        className="card-img-top p-3"
        alt={firstProduct?.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">Cart ID: {cardDetails.id}</h5>
        <p>Total Products: {cardDetails.totalProducts}</p>
        <p>Total Quantity: {cardDetails.totalQuantity}</p>
        <p>Total Price: ₹ {cardDetails.total}</p>

        <h6 className="mt-3">First Product:</h6>
      <p>Title: {firstProduct?.title}</p>       
        <p>Price: ₹ {firstProduct?.price}</p>    
        <p>Quantity: {firstProduct?.quantity}</p>

        <Link to="/user-cart" className="btn btn-secondary w-100 mt-3">
     ⬅ Back to All Carts
    </Link>

      </div>
    </div>
    </>
  )
}

export default CartDetails;