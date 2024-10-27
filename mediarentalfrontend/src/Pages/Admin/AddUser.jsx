import React, { useState } from 'react';

const AddUser = () => {
    // State for form fields
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    });

    // Function to handle input changes
    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    // Reset form data
    const resetData = () => {
        setData({
            username: '',
            email: '',
            password: '',
            role: ''
        });
    };

    // Handle form submission
    const submitForm = (event) => {
        event.preventDefault();
        // Send 'data' to backend here
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="jumbotron">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="card shadow">
                                <div className="card-header text-center">
                                    <h3>Add New User</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submitForm}>

                                        {/* Username field */}
                                        <div className="form-group m-1">
                                            <label><h5>Username</h5></label>
                                            <input
                                                type="text"
                                                onChange={(e) => handleChange(e, 'username')}
                                                value={data.username}
                                                className="form-control border border-primary"
                                                placeholder="Enter username"
                                            />
                                        </div>

                                        {/* Email field */}
                                        <div className="form-group m-1">
                                            <label><h5>Email</h5></label>
                                            <input
                                                type="email"
                                                onChange={(e) => handleChange(e, 'email')}
                                                value={data.email}
                                                className="form-control border border-primary"
                                                placeholder="Enter email"
                                            />
                                        </div>

                                        {/* Password field */}
                                        <div className="form-group m-1">
                                            <label><h5>Password</h5></label>
                                            <input
                                                type="password"
                                                onChange={(e) => handleChange(e, 'password')}
                                                value={data.password}
                                                className="form-control border border-primary"
                                                placeholder="Enter password"
                                            />
                                        </div>

                                        {/* Role Dropdown field */}
                                        <div className="form-group m-1">
                                            <label><h5>Role</h5></label>
                                            <select
                                                onChange={(e) => handleChange(e, 'role')}
                                                value={data.role}
                                                className="form-control border border-primary"
                                            >
                                                <option value="" disabled>Select Role</option>
                                                <option value="ADMIN">ADMIN</option>
                                                <option value="USER">USER</option>
                                            </select>
                                        </div>

                                        <div className="text-center mt-2">
                                            <button type="submit" className="btn btn-primary mx-2">
                                                Add User <i className="fas fa-user-plus" />
                                            </button>
                                            <button type="reset" onClick={resetData} className="btn btn-danger mx-2">
                                                Reset <i className="fas fa-undo-alt" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
