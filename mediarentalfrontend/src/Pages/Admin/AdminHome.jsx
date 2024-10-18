// src/AdminHome.jsx
import React, { useState } from 'react';
import './AdminHome.css'; // Importing the scoped CSS for this component
import { NavLink } from 'react-router-dom';
import AdminDashboard from './AdminDashboard'; // Import the AdminDashboard component
import About from './About';

const AdminHome = () => {
    const [currentPage, setCurrentPage] = useState("dashboard"); // Initial page set to "dashboard"

    const handlePageChange = (page) => {
        setCurrentPage(page); // Update the state with the current page
    };

    return (
        <>
            <div className="d-flex container-fluid bg-Color">
                <div className="container adminHomeLeft">
                    {/* Navbar start */}
                    <div className='navbar-dark m-0 p-0'>
                        <nav className="navbar navbar-expand-lg">
                            <div className="navbar-collapse">
                                <ul className="navbar-nav d-block mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink 
                                            className="nav-link" 
                                            aria-current="page" 
                                            to="/admin/home" 
                                            onClick={() => handlePageChange("dashboard")}
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            className="nav-link" 
                                            aria-current="page" 
                                            
                                            onClick={() => handlePageChange("about")}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            className="nav-link" 
                                            aria-current="page" 
                                          
                                            onClick={() => handlePageChange("contact")}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    {/* Navbar end */}

                   
                </div>
                <div className="container adminHomeRight">
                
                  {currentPage === "dashboard" && <AdminDashboard />}
                    {currentPage === "about" && <About/>}
                    {currentPage === "contact" && <div>Contact Component</div>}
                </div>
            </div>
        </>
    );
};

export default AdminHome;
