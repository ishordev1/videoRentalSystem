import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../../service/GameService';
import { toast } from 'react-toastify';
import { rentGame } from '../../service/RentService';
import { getCurrentUserDetails, getToken } from '../../auth/Index';

const BookGame = () => {
    const { gameId } = useParams();
    const userId=getCurrentUserDetails().id;
    // console.log(userId)
    const [data, setData] = useState(null);
    const [book, setBook] = useState({
        rentDuration: "",
        paidPrice: "",
    });

    useEffect(() => {
        getGameById(gameId)
            .then(response => {
                setData(response);
                // console.log(response);
                setBook(prevBook => ({
                    ...prevBook,
                    paidPrice: response.price // Set default price from game data
                }));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                toast.error("Error fetching data");
            });
    }, [gameId]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBook(prevBook => ({
            ...prevBook,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        rentGame(gameId,userId,book)
        .then(response => {
           toast.success("successfully rent game")
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
                                <h3 className='text-center'>Game Details</h3>
                                {data && (
                                    <img 
                                        // src={`http://example.com/images/${data.imgName}`}
                                        src="https://wallpaperaccess.com/full/521887.jpg"
                                        className="card-img-top" 
                                        alt={data.name} 
                                    />
                                )}
                                <div className="card-body">
                                    {data && (
                                        <>
                                            <p className="card-text m-0">Name: {data.name}</p>
                                            <p className="card-text m-0">Price: ${data.price}</p>
                                            <p className="card-text m-0">Online: {data.online ? 'Yes' : 'No'}</p>
                                            <p className="card-text m-0">Platform: {data.platform}</p>
                                            <p className="card-text m-0">Year: {data.year}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 bg-light">
                        <div className="container text-center">
                            <h1>Book Game</h1>
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
                                                value={book.paidPrice} 
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
                            {/* Add description if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookGame;
