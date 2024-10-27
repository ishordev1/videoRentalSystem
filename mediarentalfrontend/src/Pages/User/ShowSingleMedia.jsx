import React, { useEffect, useState } from 'react';
import { getMediaById } from '../../service/MediaService';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ShowSingleMedia.css'; 
import img from "../../image/Home/background img.png"



const ShowSingleMedia = () => {
    const { mediaId } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        getMediaById(mediaId)
            .then(response => {
                setData(response);
                // console.log("Fetched media:", response);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                toast.error("Fetch failed");
            });
    }, [mediaId]);

    return (
        <div className="container mt-4">
            {data ? (
                <div className="media-card">
                    <div className="card-header text-center">
                        <h2>{data.name}</h2>
                        <p className="text-muted">{data.year}</p>
                    </div>
                    <div className="media-body d-flex">
                        <div className="media-details">
                            <img
                                // src={`http://example.com/images/${data.imgName}`}
                                src={img}
                                alt={data.name}
                                className="media-img"
                            />
                            <p><strong>Price: </strong>${data.price}</p>
                            <p><strong>Description: </strong>{data.description}</p>
                        </div>
                        <div className="media-player">
                            <h4>Watch Now</h4>
                            <div className="video-container">
                                <video controls width="100%" height="auto">
                                    {/* <source src={data.mediaUrl} type="video/mp4" /> */}
                                    <source src="/VideoRentalSystem/src/main/resources/static/media/testvideo.mp4" type="video/mp4" />
                                    

                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading media details...</p>
            )}
        </div>
    );
};

export default ShowSingleMedia;
