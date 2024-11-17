import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminLoginAction } from '../Redux/Auth/authAction'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { decodeToken } from '../common/utils';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated, admin } = useSelector((store) => store?.adminLoginData);

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePassword = () => {
    if (loginFormData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      dispatch(adminLoginAction(loginFormData.email, loginFormData.password)); 
    }
  };

  useEffect(() => {
    console.log("admin",admin.token, isAuthenticated);
    // Ensure admin and admin.token are defined before attempting to decode the token
    if (isAuthenticated && admin.token) {
      const loginData = decodeToken(admin.token);
      loginData['token'] = admin.token;
      sessionStorage.setItem('adminData', JSON.stringify(loginData)); // Store in session as adminData
      toast.success('Admin login successful!', { autoClose: 3000 });
      setTimeout(() => {
        navigate("/"); // Redirect to admin dashboard
      }, 2000);
      setLoginFormData({ email: '', password: '' });
    } else if (error) {
      toast.error(error, { autoClose: 3000 });
    }
  }, [isAuthenticated, error, admin.token, navigate]);
  
  

  return (
    <div>
      <div className="container mt-48">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4"><h1>Admin Login</h1></div><hr />
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 p-6">
            <form onSubmit={handleSubmit} className="p-4 bg-slate-50">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="admin@example.com"
                  name="email"
                  value={loginFormData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                />
                <label>Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={loginFormData.password}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                />
                <label>Password</label>
                <br />
                <a href="/admin-forget-password" className="float-left">Forgot Password?</a>
              </div>
              <br />
              <button type="submit" className="btn btn-outline-success">
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <br /><br />
              <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>
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

export default AdminLogin;
