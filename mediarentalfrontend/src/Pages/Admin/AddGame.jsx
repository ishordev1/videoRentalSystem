import React, { useState } from 'react';
import { saveGame } from '../../service/GameService';
import { toast } from 'react-toastify';

const AddGame = () => {
    const [fileUpload, setFileUpload] = useState(null);

    // State for form fields
    const [data, setData] = useState({
        name: '',
        year: '',
        platform: '',
        discs: '',
        online: false,
        price: '',
        file: ''
    });

    // Function to handle changes for regular input fields
    const handleChange = (event, property) => {
        const value = property === 'online' ? event.target.checked : event.target.value;
        setData({ ...data, [property]: value });
    };

    // Handle file change
    const handleFileChange = (event) => {
        setFileUpload(event.target.files[0]);
        setData({ ...data, file: event.target.files[0].name });
    };

    // Reset form data
    const resetData = () => {
        setData({
            name: '',
            year: '',
            platform: '',
            discs: '',
            online: false,
            price: '',
            file: ''
        });
        setFileUpload(null);
    };

    // Handle form submission
    const submitForm = (event) => {
        event.preventDefault();

        saveGame(data).then((res) => {
            console.log(res)
            console.log("successfully added....")


            // uploadImage(res.bookId, imgUpload).then((data) => {
            //     toast.success("image upload successfully...")
            // }).catch(() => {
            //     toast.error("image not upload...")
            // })
            toast.success("games added successfully...")
            resetData()
        })
            .catch((error) => {
                toast.error("media not added....")
                console.log(error)
            })
        console.log(data);
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="jumbotron">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="card shadow">
                                <div className="card-header text-center">
                                    <h3>Add New Game</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submitForm}>

                                        {/* Name field */}
                                        <div className="form-group m-1">
                                            <label><h5>Name</h5></label>
                                            <input
                                                type="text"
                                                onChange={(e) => handleChange(e, 'name')}
                                                value={data.name}
                                                className="form-control border border-primary"
                                                placeholder="Enter game name"
                                            />
                                        </div>

                                        {/* Year field */}
                                        <div className="form-group m-1">
                                            <label><h5>Year</h5></label>
                                            <input
                                                type="number"
                                                onChange={(e) => handleChange(e, 'year')}
                                                value={data.year}
                                                className="form-control border border-primary"
                                                placeholder="Enter release year"
                                            />
                                        </div>

                                        {/* Platform field */}
                                        <div className="form-group m-1">
                                            <label><h5>Platform</h5></label>
                                            <input
                                                type="text"
                                                onChange={(e) => handleChange(e, 'platform')}
                                                value={data.platform}
                                                className="form-control border border-primary"
                                                placeholder="Enter platform (e.g., PC, PS5, Xbox)"
                                            />
                                        </div>

                                        {/* Discs field */}
                                        <div className="form-group m-1">
                                            <label><h5>Number of Discs</h5></label>
                                            <input
                                                type="number"
                                                onChange={(e) => handleChange(e, 'discs')}
                                                value={data.discs}
                                                className="form-control border border-primary"
                                                placeholder="Enter number of discs"
                                            />
                                        </div>

                                        {/* Online field (Checkbox) */}
                                        <div className="form-group m-1">
                                            <label><h5>Online Support</h5></label>
                                            <input
                                                type="checkbox"
                                                onChange={(e) => handleChange(e, 'online')}
                                                checked={data.online}
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label ms-2">Online</label>
                                        </div>

                                        {/* Price field */}
                                        <div className="form-group m-1">
                                            <label><h5>Price</h5></label>
                                            <input
                                                type="text"
                                                onChange={(e) => handleChange(e, 'price')}
                                                value={data.price}
                                                className="form-control border border-primary"
                                                placeholder="Enter price"
                                            />
                                        </div>

                                        {/* File upload */}
                                        <div className="form-group m-1">
                                            <label><h5>Upload File</h5></label>
                                            <input
                                                className="form-control"
                                                onChange={handleFileChange}
                                                type="file"
                                                id="formFile"
                                            />
                                        </div>

                                        <div className="text-center mt-2">
                                            <button type="submit" className="btn btn-primary mx-2">
                                                Add Game <i className="fas fa-pencil-alt" />
                                            </button>
                                            <button type="reset" onClick={resetData} className="btn btn-danger mx-2">
                                                Reset <i className="fas fa-pencil-alt" />
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

export default AddGame;
