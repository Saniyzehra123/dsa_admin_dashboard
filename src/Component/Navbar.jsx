import React from 'react';
import './Navbar.css'; // Ensure this file is in the same directory or adjust the path

export default function AdminNavbar() {
  return (
    <nav className="admin-navbar fixed-top">
      <div className='logo'>
        <a href="/">
          <img className='logo-img' src="/assets/images/logo/logo.jpg" alt="Logo" />
        </a>
      </div>
      <div className="nav-title">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="logout">
             
      <button type="button" class="btn btn-outline-dark">Logout</button>
      </div>
    </nav>
  );
}
