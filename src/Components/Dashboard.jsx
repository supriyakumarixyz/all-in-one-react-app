import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <div className='container'>
        <div className="row mt-5">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Products</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/products" className="btn btn-primary">Products List</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> Users</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/users" className="btn btn-secondary">Users List</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cart</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/cart" className="btn btn-danger">Cart List</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Posts</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/posts" className="btn btn-dark">Posts List</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Todos</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/todo" className="btn btn-info">ToDo List</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Quotes</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/quotes" className="btn btn-info">Quotes List</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Recipes</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/recipes" className="btn btn-warning">Recipes List</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard