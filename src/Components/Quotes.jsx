import React, { useEffect, useState } from 'react';

function Quotes() {
  const [quote,setQuote]=useState([]);

  useEffect(()=>{
   fetch("https://dummyjson.com/quotes")
   .then((res)=>res.json()).then((res)=>setQuote(res.quotes))
  },[])
  return (
    <div className="container mt-5">
      <div className="row g-4">
        {quote.map((quotes) => (
          <div key={quotes.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column justify-content-between bg bg-dark text-white">
                <p className="card-text fst-italic ">"{quotes.quote}"</p>
                <h6 className="card-subtitle mt-3 text-end text-danger">
                  - {quotes.author}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quotes