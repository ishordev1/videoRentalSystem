import React, { useEffect, useState } from 'react';
import DynamicCard from '../../Component/user/DynamicCard';
import img from '../../image/Home/india.png';
import { getCurrentUserDetails } from '../../auth/Index';
import { getRentalGameOnly } from '../../service/RentService';
import { toast } from 'react-toastify';

const ShowRentalGame = () => {
    const userId = getCurrentUserDetails().id;
    const [data, setData] = useState([]);

    useEffect(() => {
        getRentalGameOnly(userId)
            .then(response => {
                setData(response);
                // console.log(response);
            })
            .catch(error => {
                console.error('Error fetching games:', error);
                toast.error("Failed to fetch rented games");
            });
    }, [userId]);

    return (
        <>
            <div className="container-fluid">
                <h1 className='text-center m-2'>Your All Rental Games</h1>
                <hr />
                <div className="d-flex justify-content-center flex-wrap">
                    {data.length > 0 ? (
                        data.map((item) => (
                            item.game && ( 
                                <DynamicCard
                                    key={item.id} 
                                    img={img} 
                                    title={item.game.name}
                                    footer="Download"
                                    link={`/user/bookgame/${item.id}`}
                                />
                            )
                        ))
                    ) : (
                        <p>No rented games found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ShowRentalGame;
