import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
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
                                <NavLink className="nav-link" aria-current="page" to="/user/dashboard/showrentalmedia"> <i className="fa-solid fa-video mx-2"></i>Media</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/user/dashboard/showrentalgame"> <i className="fa-solid fa-car mx-2"></i>Game</NavLink>
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
  )
}

export default Dashboard
