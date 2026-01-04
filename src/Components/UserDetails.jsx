import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function UserDetails() {
  const [user, setUser] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/users/"+id)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  if (!user) {
    return <h3 className="text-center">Loading...</h3>;
  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className="card mb-3" style={{ maxWidth: "1200px" }}>
          <div className="row g-0">
            <div className="col-md-3">
              <img 
                src={user.image} 
                className="img-fluid rounded-start" 
                alt={user.firstName} 
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">
                  {user.firstName} {user.lastName}
                </h5>
                <p className="card-text">
                  Age: {user.age}
                </p>
                <p className="card-text">
                  BirthDate: {user.birthDate}
                </p>
                <p className="card-text">
                  Address: {user.address.address},
                  {user.address.city}, {user.address.state}
                </p>
                <p className="card-text">
                  Email: {user.email}
                </p>
                <p className="card-text">
                  Company: {user.company.department},
                  {user.company.name},{user.company.title}
                  {user.company.address.address},{user.company.address.city}
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
