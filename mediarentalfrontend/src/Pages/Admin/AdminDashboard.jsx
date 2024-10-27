import React from 'react'
import Card from '../../Component/Card'
import img from '../../image/Home/g1.png'
const AdminDashboard = () => {
  const cardStyle = {
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    width: '18rem',
    border: '1px solid #ddd',
    borderRadius: '15px',
   
    
  };
  return (
    <>
      <div className="container m-2">
        <h1 className="text-center">Welcome to Admin Dashboard</h1>
        <hr />
     <div className="d-flex flex-wrap justify-content-center">
  
        <Card
          img={img}
          text="190"
          footer="Total User"
          style={cardStyle}
        />
        <Card
          img={img}
          text="190"
          footer="Total User"
          style={cardStyle}
        />
        <Card
          img={img}
          text="190"
          footer="Total User"
          style={cardStyle}
        />
        <Card
          img={img}
          text="190"
          footer="Total User"
          style={cardStyle}
        />
     </div>
      </div>
    </>
  )
}

export default AdminDashboard
