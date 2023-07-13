import React from 'react'
import Buttom from './Buttom'
import './Style/Section3.css'

export default function Section3() {
  return (
    <>
     <div className='parent'>
     <div className='card-one '>
        <img className='col-2' src="https://bestwebcreator.com/shopwise/demo/assets//images/tranding_img.png" alt="" />
        </div> 

        <div className="card-one col-4 ">
            <p><span>New season trends!</span></p>
            <h1>Best Summer Collection</h1>
            <h3>Sale Get up to 50% Off</h3>
            <Buttom color="btn btn-danger mb-4" name='SHOP ' />
        </div>
        </div>
    </>
  )
}
