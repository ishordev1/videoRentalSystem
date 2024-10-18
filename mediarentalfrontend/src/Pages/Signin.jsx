import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doLogin } from '../auth/Index';
import { login } from '../service/Login-Service';
import '../Pages/Signin.css';  // Importing CSS for the Signin page
import img from '../image/Home/g1.png';  // Importing background image

const Signin = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event, property) => {
    setLoginDetails({ ...loginDetails, [property]: event.target.value });
  };

  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const jwtTokenData = await login(loginDetails);
      toast.success("Login successful");

      await doLogin(jwtTokenData, () => {
        if (jwtTokenData.user.role === "USER") {
          navigate('/user/home');
        } else {
          navigate('/admin/home');
        }
        setTimeout(() => {
          window.location.reload();
        }, 0);
      });
    } catch (error) {
      toast.error("Error occurred during login");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">

        {/* Left Box with Background Image */}
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
       
        </div>

        {/* Right Box */}
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Signin Here</h2>
            </div>
            <form onSubmit={submitForm}>
              <div className="input-group mb-3">
                <input
                  onChange={(e) => handleChange(e, 'email')}
                  value={loginDetails.email}
                  type="email"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                />
              </div>
              <div className="input-group mb-1">
                <input
                  onChange={(e) => handleChange(e, 'password')}
                  value={loginDetails.password}
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                </div>
                <div className="forgot">
                  <small><a href="#">Forgot Password?</a></small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-hover btn-lg btn-primary w-100 fs-6">Login</button>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <i class="fa-brands fa-google"></i>
                  <small> Sign In with Google</small>
                </button>
              </div>
            </form>
            <div className="row">
              <small>Don't have an account? <a href="#">Sign Up</a></small>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signin;
