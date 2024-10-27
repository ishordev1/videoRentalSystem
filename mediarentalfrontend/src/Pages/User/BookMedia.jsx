import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMediaById } from '../../service/MediaService';
import { toast } from 'react-toastify';
import { getCurrentUserDetails } from '../../auth/Index';
import { rentMedia } from '../../service/RentService';

const BookMedia = () => {
    const { mediaId } = useParams();
    const userId=getCurrentUserDetails().id;
    const [book, setBook] = useState({
        rentDuration: "",
        paidPrice: "",
    });

    const [data, setData] = useState();

    useEffect(() => {
        getMediaById(mediaId)
            .then(response => {
                setData(response);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                toast.error("Fetch failed");
            });
    }, [mediaId]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBook(prevBook => ({
            ...prevBook,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        rentMedia(mediaId,userId,book)
        .then(response => {
           toast.success("successfully rent media")
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            toast.error("Error fetching data");
        });
       
    };

    return (
        <div>
            <div className="container">
                <div className="row m-4">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className='text-center'>Media Details</h3>
                                <img
                                    src={data?.imgUrl || "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-text m-0">Name: {data?.name}</p>
                                    <p className="card-text m-0">Price: {data?.price}</p>
                                    <p className="card-text m-0">Release Year: {data?.year}</p>
                                    <p className="card-text m-0">Rating: 8.5/10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 bg-light">
                        <div className="container text-center">
                            <h1>Book Media</h1>
                            <hr />
                            <div className="card">
                                <div className="booking-form" style={{ textAlign: "left" }}>
                                <form id="accommodation-form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="paidPrice">Enter Price:</label>
                                            <input 
                                                type="text" 
                                                name="paidPrice"
                                                placeholder='Enter Price Here' 
                                                required 
                                                value={data?.price}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="rentDuration">Rent Duration:</label>
                                            <input 
                                                type="number" 
                                                name="rentDuration"
                                                placeholder='Enter Rent Duration Here' 
                                                required 
                                                value={book.rentDuration} 
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="container text-center">
                                            <button type="submit" className="btn">Pay Now</button>
                                        </div>
                                    </form>
                                    <div id="accommodation-results" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card p-0">
                        <div className="card-body bg-primary">
                            <h3 className='text-center'>Description</h3>
                            <p>{data?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookMedia;
