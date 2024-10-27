import React, { useEffect, useState } from 'react';
import DynamicCard from '../../Component/user/DynamicCard';
import { getCurrentUserDetails } from '../../auth/Index';
import { getRentalMediaOnly } from '../../service/RentService';
import { toast } from 'react-toastify';
import img from '../../image/Home/italy.png'

const ShowRentalMedia = () => {
    const userId = getCurrentUserDetails().id;
    const [data, setData] = useState([]);

    useEffect(() => {
        getRentalMediaOnly(userId)
            .then(response => {
                setData(response);
                // console.log("this is only media"+response);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                toast.error("Fetch failed");
            });
    }, [userId]);
// console.log(data);

    return (
        <>
            <div className="container-fluid">
                <h1 className='text-center m-2'>Your All Rental Media</h1>
                <hr />
                <div className="d-flex justify-content-center flex-wrap">
                    {data.length > 0 ? (
                        data.map((item) => (
                            item.media && (
                                <DynamicCard
                                    key={item.id}
                                    // img={`http://example.com/images/${item.media.imgName}`} 
                                    img={img} 
                                    title={item.media.name}
                                    footer="Watch Now"
                                    link={`/user/dashboard/showrentalmedia/showmedia/${item.media.id}`}
                                />
                            )
                        ))
                    ) : (
                        <p>No rentals found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ShowRentalMedia;
