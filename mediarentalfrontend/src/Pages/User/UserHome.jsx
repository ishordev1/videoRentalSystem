import React from 'react'
import Card from '../../Component/Card'
import DynamicCard from '../../Component/user/DynamicCard'
import img from '../../image/Home/g5.png'
import Slider from '../../Component/user/Slider'

const UserHome = () => {
  return (
    <div>
      <Slider/>
   <div className="container-fluid">
    <div className="container">
      <div className="border bg-light p-3 m-3">
      <h1>Latest Media</h1>
      <div className="d-flex flex-wrap justify-content-center">
      <DynamicCard
          img={img}
          title="avatar"
          price="200"
          footer="Rent Now" 
        />
      <DynamicCard
          img={img}
          title="avatar"
          price="200"
          footer="Rent Now" 
        />
      <DynamicCard
          img={img}
          title="avatar"
          price="200"
          footer="Rent Now" 
        />
      <DynamicCard
          img={img}
          title="avatar"
          price="200"
          footer="Rent Now" 
        />
      <DynamicCard
          img={img}
          title="avatar"
          price="200"
          footer="Rent Now" 
        />

      </div>
      </div>


      <div className="border bg-light p-3 m-3">
      <h1>Latest Game</h1>
      <div className="d-flex flex-wrap justify-content-center">
      <DynamicCard
          img={img}
          title="avatar"
          price="200"
          footer="Rent Now" 
        />
      <DynamicCard
          img={img}
          title="avatar"
          price="200"
          footer="Rent Now" 
        />
      <DynamicCard
          img={img}
          title="avatar"
          price="200"
          footer="Rent Now" 
        />
      <DynamicCard
          img={img}
          title="avatar"
          price="200"
          footer="Rent Now" 
        />
      <DynamicCard
          img={img}
          title="avatar"
          price="200"
          footer="Rent Now" 
        />

      </div>
      </div>

    </div>
   </div>
    </div>
  )
}

export default UserHome
