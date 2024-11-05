// Admin.jsx
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css'; // For custom styles

const Admin = () => {
  const location = useLocation();

  // Check if the current path matches the specified route
  const isActive = (path) => location.pathname === path;

  return (
    <div className="container-fluid admin-container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 sidebar p-0">
          <nav className="navbar navbar-expand-md navbar-light flex-column p-3">
            <ul className="nav flex-column w-100">
              <li className="nav-item">
                <Link
                  to="/add-item"
                  className={`nav-link ${isActive('/admin/add-item') ? 'active' : ''}`}
                >
                  <i className='fas fa-plus me-2'></i>
                  Add Items
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/list-items"
                  className={`nav-link ${isActive('/admin/list-items') ? 'active' : ''}`}
                >
                  <i className='fas fa-list me-2'></i>
                  List Items
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/orders"
                  className={`nav-link ${isActive('/admin/orders') ? 'active' : ''}`}
                >
                  <i className='fa fa-shopping-cart me-2'></i>
                  Orders
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="col-md-9 col-lg-10 main-content">
          {/* The Outlet will load the components based on the route */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
