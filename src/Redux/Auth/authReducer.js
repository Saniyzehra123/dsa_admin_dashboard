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


const initialState = {
  loading: false,
  admin: null,
  error: null,
  isAuthenticated: false,
  message: null,
};

// Admin Register Reducer
export const adminRegisterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isAuthenticated: false,
      };
    case ADMIN_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        admin: payload.admin, // admin data
        token: payload.token, // admin token
        isAuthenticated: true,
        error: null,
      };
    case ADMIN_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload || 'Error in admin registration',
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Admin Login Reducer
export const adminLoginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isAuthenticated: false,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        admin: payload.admin, // admin data
        isAuthenticated: true,
        error: null,
      };
    case ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload || 'Error in admin login',
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Forgot Password Reducer
export const forgotPasswordReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
        error: null,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
        error: null,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        error: payload || 'Error in sending forgot password email',
      };
    default:
      return state;
  }
};

// Reset Password Reducer
export const resetPasswordReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
        error: null,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
        error: null,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        error: payload || 'Error in resetting password',
      };
    default:
      return state;
  }
};

// // Admin Register Reducer
// export const adminRegisterReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case ADMIN_REGISTER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//         isAuthenticated: false,
//       };
//     case ADMIN_REGISTER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         admin: payload,
//         isAuthenticated: true,
//         error: null,
//       };
//     case ADMIN_REGISTER_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: payload || 'Error in admin registration',
//         isAuthenticated: false,
//       };
//     default:
//       return state;
//   }
// };

// // Admin Login Reducer
// export const adminLoginReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case ADMIN_LOGIN_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//         isAuthenticated: false,
//       };
//     case ADMIN_LOGIN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         admin: payload,
//         isAuthenticated: true,
//         error: null,
//       };
//     case ADMIN_LOGIN_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: payload || 'Error in admin login',
//         isAuthenticated: false,
//       };
//     default:
//       return state;
//   }
// };

// // Forgot Password Reducer
// export const forgotPasswordReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case FORGOT_PASSWORD_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         message: null,
//         error: null,
//       };
//     case FORGOT_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         message: payload,
//         error: null,
//       };
//     case FORGOT_PASSWORD_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         message: null,
//         error: payload || 'Error in sending forgot password email',
//       };
//     default:
//       return state;
//   }
// };

// // Reset Password Reducer
// export const resetPasswordReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case RESET_PASSWORD_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         message: null,
//         error: null,
//       };
//     case RESET_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         message: payload,
//         error: null,
//       };
//     case RESET_PASSWORD_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         message: null,
//         error: payload || 'Error in resetting password',
//       };
//     default:
//       return state;
//   }
// };
