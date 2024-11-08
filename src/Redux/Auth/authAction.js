import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS, ADMIN_REGISTER_FAILURE
} from './actionType';
import axios from 'axios';

 

 
// Admin Login Action
export const adminLoginAction = (email, password) => async (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/admin/login`, { email, password });
    // Store both admin data and token in the payload
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: { admin: data.admin, token: data.token }
    });
    
  } catch (error) {
    dispatch({ type: ADMIN_LOGIN_FAILURE, payload: error?.response?.data?.message || error?.message });
  }
};



// Forgot Password Action
export const forgotPasswordAction = (email) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/customer/forgot-password`, { email });
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FORGOT_PASSWORD_FAILURE, payload: error?.response?.data?.message || error?.message });
  }
};

// Reset Password Action
export const resetPasswordAction = (token, password, confirmPassword) => async (dispatch) => {
  dispatch({ type: RESET_PASSWORD_REQUEST });
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/customer/reset-password`, { token, password, confirmPassword });
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: RESET_PASSWORD_FAILURE, payload: error?.response?.data?.message || error?.message });
  }
};

// Admin Register Action
export const adminRegisterAction = (formData) => async (dispatch) => {
  dispatch({ type: ADMIN_REGISTER_REQUEST });
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/admin/register`, formData);
    // Store both admin data and token in the payload
    dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: { admin: data.admin, token: data.token } });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    dispatch({ type: ADMIN_REGISTER_FAILURE, payload: error?.response?.data?.message || error?.message });
  }
};





 
