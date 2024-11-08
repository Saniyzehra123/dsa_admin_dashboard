import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Admin from './Admin';
import AddItems from './AddItems';
 
import Orders from './Orders';
import ListItems from './ListItems';
import AdminLogin from './AdminLogin';
import AdminSignUp from './AdminSignUp';

export default function Allroutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Admin as the Parent Route */}
        <Route path="/" element={<Admin />}>
          {/* Nested Routes */}
          <Route path="/add-item" element={<AddItems />} />
          <Route path="/list-items" element={<ListItems/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<AdminLogin/>}/>
          <Route path="/sign-up" element={<AdminSignUp />} />

        </Route>
      </Routes>
    </div>
  );
}

