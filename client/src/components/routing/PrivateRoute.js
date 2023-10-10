import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
