import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminRegisterAction } from '../Redux/Auth/authAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminSignUp = () => {
    const dispatch = useDispatch();
    const { error, isAuthenticated } = useSelector((state) => state.adminRegister);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      admin_name: '', 
      email: '',
      password: '',
    });
  
    const resetForm = () => {
      setFormData({
        admin_name: '',  
        email: '',
        password: '',
      });
    };
  
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await dispatch(adminRegisterAction(formData));
      resetForm(); 
    };
  
    useEffect(() => {
      if (isAuthenticated) {
        toast.success('Admin registered successfully!', { autoClose: 3000 });
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
      if (error) {
        toast.error(error, { autoClose: 3000 });
      }
    }, [isAuthenticated, error, navigate]);
  
    return (
      <div>
        <div className="container mt-48">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"><h1>Admin Sign Up Here</h1></div><hr />
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 p-6">
              <form className="p-4 bg-slate-50" onSubmit={handleSubmit} autoComplete="off">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Admin Name"
                    name="admin_name"
                    value={formData.admin_name}
                    onChange={handleOnChange}
                    autoComplete="off"
                    required
                  />
                  <label>Admin Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="admin@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    autoComplete="off"
                    required
                  />
                  <label>Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleOnChange}
                    autoComplete="off"
                    required
                  />
                  <label>Password</label>
                </div>
                <br />
                <button type="submit" className="btn btn-outline-success">Sign Up</button>
                <br /><br />
                <p>Already have an account? <a href="/login">Login</a></p>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
  
        <ToastContainer
          className="custom-toast-container"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
};

export default AdminSignUp;
