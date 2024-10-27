import React, { useEffect, useState } from 'react'
import DynamicCard from '../../Component/user/DynamicCard'
import img from '../../image/Home/italy.png'
import { getAllMedia } from '../../service/MediaService';
import { toast } from 'react-toastify';
const Media = () => {
const [data,setData]=useState();

useEffect(() => {
    getAllMedia()
      .then(response => {
        setData(response);
    //  console.log(response);
     
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        toast.error("fetch success")
      });
  }, []);

  return (
    <div>
   <div className="border bg-light p-3 m-3">
      <h1>Latest Media</h1>
      
      <div className="d-flex flex-wrap justify-content-center">
          {data && data.length > 0 ? (
            data.map((item) => (
              <DynamicCard
                key={item.id} 
                // img={item.imgUrl ||"/"}
                img={img}
                title={item.name}
                price={item.price}
                footer="Rent Now"
                link={`/user/bookmedia/${item.id}`}
                
              />
            ))
          ) : (
            <p>No media available</p>
          )}
     

      </div>
      </div>
    </div>
  )
}

export default Media
