import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { adminLoginReducer, adminRegisterReducer, forgotPasswordReducer, resetPasswordReducer } from './Auth/authReducer';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers
const combinedReducers = combineReducers({
  adminRegister: adminRegisterReducer,
  adminLoginData: adminLoginReducer, // Naming it as per your `useSelector`
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
});

// Apply persistence to the combined reducers
const persistedReducer = persistReducer(persistConfig, combinedReducers);

// Configure the store with persisted reducers
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// Create a persistor for the store
export const persistor = persistStore(store);
export default store;
