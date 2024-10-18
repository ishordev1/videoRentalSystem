import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signUp } from '../service/Login-Service';

const Signup = () => {
  const [loginDetails, setLoginDetails] = useState({
    role: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    username: ''
  });
  const [reset, setReset] = useState({
    role: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    username: ''
  });

  const handleChange = (event, property) => {
    setLoginDetails({ ...loginDetails, [property]: event.target.value });
  };

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    try {
      const user = signUp(loginDetails);
      toast.success("Login successful");
      setLoginDetails(reset);
     
    } catch (error) {
      toast.error("Error occurred during login");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 mt-4">
          {JSON.stringify(loginDetails)}
          <div className="card m-3 p-3">
            <div className="card-header">
              <h2 className="text-center mb-4">Signup Here</h2>
            </div>
            <form onSubmit={submitForm}>

            <div className="mb-3">
                  <label htmlFor="password" className="form-label">Name</label>
                  <input
                    onChange={(e) => handleChange(e, 'username')}
                    value={loginDetails.username}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="name"
                  />
                </div>

            <div className="mb-3">
                  <label htmlFor="password" className="form-label">Email</label>
                  <input
                    onChange={(e) => handleChange(e, 'email')}
                    value={loginDetails.email}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    onChange={(e) => handleChange(e, 'password')}
                    value={loginDetails.password}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
             
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
