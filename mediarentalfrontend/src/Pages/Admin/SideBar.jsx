import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
        {/* sidebar start */}
        <div className=' navbar-dark m-0 p-0'>
                        <nav className="navbar navbar-expand-lg">

                                <div className="navbar-collapse">
                                    <ul className="navbar-nav d-block  mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/admin/home">dashboard</NavLink>
                                        </li>


                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/admin/about">about</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/admin/contact">contact</NavLink>
                                        </li>
                                    
                                    </ul>
                                </div>
                           

                        </nav>

                    </div>

                    {/* sidebar end */}
    </div>
  )
}

export default SideBar
