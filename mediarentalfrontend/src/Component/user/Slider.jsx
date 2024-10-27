import React, { useEffect, useRef, useState } from 'react'
import './Slider.css';
import img1 from '../../image/Home/g2.png'
import img2 from '../../image/Home/g3.png'
import img3 from '../../image/Home/g4.png'
import img4 from '../../image/Home/g5.png'

const Slider = () => {

    

    return (
        <>
 <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://s3.scoopwhoop.com/anj/sw/00d1e869-9318-4270-bb97-a153a1db904e.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://wallpaperaccess.com/full/3366503.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/R.f2531d82691040a22f25f3ce3c7b508a?rik=ui1Pa9u5hzYd9g&riu=http%3a%2f%2fhdqwalls.com%2fdownload%2fbattlefield-v-game-4k-1u-3840x2160.jpg&ehk=jTWJRg5E4s8oGdjsEqmGaNGHE42r07pQbI2coWB7HD0%3d&risl=1&pid=ImgRaw&r=0" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="carousel-text text-center">
    <h1 className='text text-danger'>Welcom to Our</h1>
    <h2 className='text text-warning'>Media Rental</h2>
    <h3 className='text text-white'>website</h3>
</div>

        </>
    );


}

export default Slider
