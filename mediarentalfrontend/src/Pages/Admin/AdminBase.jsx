import React from 'react'
import { isAdmin, isLoggedIn } from '../../auth/Index';
import { Navigate, Outlet } from 'react-router-dom';

const AdminBase = () => {
    const login=isLoggedIn();
    const admin=isAdmin();
      if(login===false){
          return <Navigate to={"/signin"}/>
        }
      if(admin){
        return <Outlet/>
        }
}

export default AdminBase
