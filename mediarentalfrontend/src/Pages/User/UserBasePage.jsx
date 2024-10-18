import React from 'react'
import { isLoggedIn, isUser } from '../../auth/Index';
import { Navigate, Outlet } from 'react-router-dom';

const UserBasePage = () => {
    const login=isLoggedIn();
    const user=isUser();
      if(login===false){
          return <Navigate to={"/signin"}/>
        }
      if(user){
        return <Outlet/>
        }
}

export default UserBasePage
