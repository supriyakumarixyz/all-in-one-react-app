import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetails() {

  const[productDetail,setProductDetail]=useState(null);

  const {id} = useParams();

 useEffect(()=>{
 fetch(`https://dummyjson.com/products/${id}`)
 .then((res)=>res.json()).then((res)=>setProductDetail(res))
 },[id]);

 if (!productDetail) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }


  return (
    <>
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <div className="row g-4 align-items-center">

          {/* Image */}
          <div className="col-md-5 text-center">
            <img
              src={productDetail.thumbnail}
              alt={productDetail.title}
              className="img-fluid rounded"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
          </div>

          {/* Details */}
          <div className="col-md-7">
            <h3>{productDetail.title}</h3>
            <p className="text-muted">{productDetail.description}</p>

            <h4 className="text-success">₹ {productDetail.price}</h4>

            <p><strong>Category:</strong> {productDetail.category}</p>
            <p><strong>Rating:</strong> ⭐ {productDetail.rating}</p>
            <p><strong>Brand:</strong> {productDetail.brand}</p>

            <Link to="/products" className="btn btn-outline-primary mt-3">
              ⬅ Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails;