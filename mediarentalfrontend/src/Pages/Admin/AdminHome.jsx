// src/AdminHome.jsx
import React, { useState } from 'react';
import './AdminHome.css'; // Importing the scoped CSS for this component
import { Link, NavLink, Outlet } from 'react-router-dom';

const AdminHome = () => {

    return (
    <>
      <div className="d-flex ">
                <div className="adminHomeLeft bg-Color">
                    {/* navbar start */}
                    <div className=' navbar-dark'>
                        <nav className="navbar navbar-expand-lg mx-3">

                                <div className="navbar-collapse">
                                    <ul className="navbar-nav d-block  mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/admin/home/dashboard"><i class="fa-solid fa-house mx-2"></i>dashboard</NavLink>
                                        </li>


                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/admin/home/media"> <i class="fa-solid fa-video mx-2"></i>Media</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/admin/home/game"> <i class="fa-solid fa-car mx-2"></i>Game</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/admin/home/user"> <i class="fa-solid fa-user mx-2"></i>user</NavLink>
                                        </li>
                                    
                                    </ul>
                                </div>
                           

                        </nav>

                    </div>

                    {/* navbar end */}
                </div>
                <div className="container adminHomeRight">
                <Outlet/>
                </div>

            </div>
    </>
           
    );
};

export default AdminHome;
