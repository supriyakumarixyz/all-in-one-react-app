import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Users() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json()).then((res) => setUsers(res.users))
  }, [])

  const redirectUserDetails = (userId) => {
    navigate('/user-details/'+userId);
  }
  return (
    <>
      <div className='container'>
        <div className='row mt-2'>
          <h5>Users List</h5>
          <div className='col-md-12'>
            <table className='table table-responsive table-striped table-bordered'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <th>{user.id}</th>
                        <th>{user.firstName} {user.lastName} </th>
                        <th>{user.email}</th>
                        <th>{user.phone}</th>
                        <th>
                          <img style={{ height: "70px", width: "70px" }} src={user.image} />
                        </th>
                        <th>
                          <button className='btn btn-dark' onClick={()=>{redirectUserDetails(user.id)}}>View Details</button>
                        </th>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

export default Users