import React from 'react'
import {Routes , Route , Navigate} from "react-router-dom";
import {Toaster } from "react-hot-toast";
import Landing from './pages/landing/Landing.jsx';  
import Login from './pages/auth/Login.jsx';
import Signup from './pages/auth/Signup.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Profile from './pages/profile/Profile.jsx';
import AllInvoices from './pages/invoices/AllInvoices.jsx';
import InvoiceDetail from './pages/invoices/InvoiceDetail.jsx';
import CreateInvoice from './pages/invoices/CreateInvoice.jsx';
import ProtectedRoute from './components/auth/ProtectedRoutes.jsx';

const App = () => {
  return (
    <div>
      {/* Routes */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path='/' element={<ProtectedRoute />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
          <Route path='invoices' element={<AllInvoices />} />
          <Route path='invoices/:id' element={<InvoiceDetail />} />
          <Route path='invoices/new' element={<CreateInvoice />} />
        </Route>

        {/* Catch all routes */}
        <Route path="*" element={<Navigate to ="/" replace/>} />
      </Routes>  

      <Toaster />
    </div>
  )
}

export default App