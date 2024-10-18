import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { doLogout, getCurrentUserDetails, isAdmin, isLoggedIn, isUser } from '../auth/Index'

const Navbar = () => {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(undefined)


  useEffect(() => {
    setLogin(isLoggedIn())
    setUser(getCurrentUserDetails())

  }, [login])

  const navigate = useNavigate();

  const logout = () => {
    doLogout(() => {
      //logged out
      setLogin(false)
      window.location.reload();
      navigate('/')

    })
  }
  let role;
  if (user && user.role === "USER") {
    role = 'user'
  }
  else {
    role = "admin"
  }



  return (
    <>
      <div className='container-fluid navbar-dark bg-Color m-0 p-0 sticky-top'>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">Media Rent</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {
                  !login && (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                      </li>
                    </>
                  )
                }
                
                {
                  login && isUser && role === "user" && (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to={`/${role}/home`}>Home</NavLink>
                      </li>

                    </>
                  )
                }
                {
                  login && isAdmin && role === "admin" && (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to={`/${role}/home`}>Home</NavLink>
                  
                      </li>
                    </>
                  )
                }



                {
                  !login && (
                    <>
                      <li className="nav-item">
                        <NavLink to='/about' className="nav-link">about</NavLink>
                      </li>

                  
                    </>
                  )
                }
              </ul>



              {
                login && (
                  <>
                    <a className="nav-link text-white mx-2" href="#">{user.email}</a>  </>
                )
              }
              <form className="d-flex">
                {
                  login && (
                    <>

                      <NavLink className="btn btn-success mx-2" onClick={logout} type="submit">logout</NavLink>
                    </>
                  )
                }
                {
                  !login && (
                    <>
                      <NavLink to='/signin' className="btn btn-success mx-2" type="submit">login</NavLink>
                      <NavLink to="/signup" className="btn btn-warning" type="submit">signup</NavLink>
                    </>
                  )
                }
              </form>
            </div>
          </div>
        </nav>

      </div>
      {/* <button className='btn btn-warning admin-sidebar-btn'> <i class="bi bi-distribute-vertical"></i></button> */}
    </>
  )
}

export default Navbar
