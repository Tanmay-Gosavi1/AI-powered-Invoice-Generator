import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout.jsx';

const ProtectedRoutes = ({children}) => {
  const isAuthenticated = true; // Replace with actual authentication logic
  const isLoading = false; // Replace with actual loading state

  if(isLoading){
    return <div>Loading...</div>;
  }

  if(!isAuthenticated){
    return <Navigate to="/login" replace />;
  }
  return (
    <DashboardLayout>{children ? children : <Outlet />}</DashboardLayout>
  )
}

export default ProtectedRoutes