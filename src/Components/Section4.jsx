import React from 'react'
import './Style/Section4.css'
export default function Section4() {
  return (
    <>
     
     <div id="carouselExampleAutoplaying" className="carousel slide parent1 " data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <div className="carousel-captio ">

        <h1 className='text-dark'>Our Client Say!</h1>
        <p className='text-dark col-'>Some representative placeholder content for the first slide.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus, eligendi quis eum dolore eius vitae nulla esse modi aut molestias assumenda suscipit vel! Fugiat deleniti sequi a. Fuga, ab.</p>
      </div>
      <img src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img2.jpg" className="d" alt="..."/>
<p className='text-dark'><span>Disen By</span></p>
    </div>
    <div className="carousel-item">
      <div className="carousel-captio  ">
<h1 className='text-dark'>Our Client Say!</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime blanditiis, voluptatibus rerum dolorum atque velit, doloribus molestiae excepturi suscipit accusamus. Dolorum quibusdam perspiciatis doloribus laboriosam cum alias quae ut.</p>

      <img src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img1.jpg" className="d" alt="..."/>
<p className='text-dark'><span>Disen By</span></p>
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
