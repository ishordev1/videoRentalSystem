import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { toast } from 'react-toastify';
import { saveMedia } from '../../service/MediaService';

const AddMedia = () => {
    const editor = useRef(null);
    const [imgUpload, setImageUpload] = useState(null);

    // State for form fields matching your backend
    const [data, setData] = useState({
        name: '',
        description: '',
        year: '',
        price: '',
        image: ''
    });

    // Function to handle changes for regular input fields
    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    // Function to handle the change for the description field using JoditEditor
    const contentFieldChange = (fieldData) => {
        setData({ ...data, description: fieldData });
    };

    // Reset form data to default values
    const resetData = () => {
        setData({
            name: '',
            description: '',
            year: '',
            price: '',
            file: ''
        });
        setImageUpload(null);
    };

    // Handle image file change
    const handleFileChange = (event) => {
        setImageUpload(event.target.files[0]);
        setData({ ...data, file: event.target.files[0].name });
    };

    // Handle form submission
    const submitForm = (event) => {
        event.preventDefault();

        saveMedia(data).then((res) => {
            console.log(res)
            console.log("successfully added....")


            // uploadImage(res.bookId, imgUpload).then((data) => {
            //     toast.success("image upload successfully...")
            // }).catch(() => {
            //     toast.error("image not upload...")
            // })
            toast.success("media added successfully...")
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
                                    <h3>Add New Media</h3>
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
                                                placeholder="Enter media name"
                                            />
                                        </div>

                                        {/* Description field using JoditEditor */}
                                        <div className="form-group m-1">
                                            <label><h5>Description</h5></label>
                                            <JoditEditor
                                                ref={editor}
                                                value={data.description}
                                                onChange={contentFieldChange}
                                                config={{
                                                    height: 400, // Increase height here (value in pixels)
                                                }}
                                            />
                                        </div>

                                        {/* Year field */}
                                        <div className="form-group m-1">
                                            <label><h5> Release Year</h5></label>
                                            <input
                                                type="number"
                                                onChange={(e) => handleChange(e, 'year')}
                                                value={data.year}
                                                className="form-control border border-primary"
                                                placeholder="Enter release year"
                                            />
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

                                        {/* Image file upload */}
                                        <div className="form-group m-1">
                                            <label><h5>Select Media</h5></label>
                                            <div className="mb-3">
                                                <input
                                                    className="form-control"
                                                    onChange={handleFileChange}
                                                    type="file"
                                                    id="formFile"
                                                />
                                            </div>
                                        </div>

                                        <div className="text-center mt-2">
                                            <button type="submit" className="btn btn-primary mx-2">
                                                Add Media <i className="fas fa-pencil-alt" />
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

export default AddMedia;
