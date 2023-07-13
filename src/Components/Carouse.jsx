import React from 'react'
import Buttom from './Buttom'
import './Style/Carouse.css'

export default function Carouse() {
  return (
   <>
<div id="carouselExampleAutoplaying" className="carousel slide c" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active col-sm-12 col-12">
      <img src="https://bestwebcreator.com/shopwise/demo/assets/images/banner1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-block   mb-5 col-md-4 text-center">

        <Buttom color="btn btn-danger " name='SHOP ' />
        <h1 className='text-dark'>Woman Fashion</h1>
        <p className='text-dark col-'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://bestwebcreator.com/shopwise/demo/assets/images/banner2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-block d-me-block mb-5 col-md-4 text-center">
<p className='text-dark'>50% off in all products</p>
<h1 className='text-dark'>Man Fashion</h1>
<Buttom color="btn btn-danger mb-4" name='SHOP ' />
</div>
    </div>
    <div className="carousel-item">
      
      <img src="https://bestwebcreator.com/shopwise/demo/assets/images/banner3.jpg" className="d-block w-100 h-110"  alt="..."/>
      <div className="carousel-caption d-block d-me-block mb-5 col-md-4 text-center">

<Buttom  color="btn btn-danger mb-4" name='SHOP ' />
<p className='text-dark'>Taking your Viewing Experience to Next Level</p>
<h1 className='text-dark'>Summer Sale</h1>
</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </>
  )
}
