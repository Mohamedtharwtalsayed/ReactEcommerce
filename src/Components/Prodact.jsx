import React from 'react'
import Cards from './Cards'


export default function Prodact() {
  return (
    <>
    
    <div className='container '>
        <div className='row'>
<div className='text-center '>
    <h1>Exclusive Products</h1>
</div> 
<div className='side aline-item-center nav navbar-nav '>
<ul className=' navbar navbar-expan-lg    font-weight-blod'>
        <li className='nav-link  col-4'>New Arrival</li>
        <li className='nav-link active col-4'>Best Sellers</li>
        <li className='nav-link col-4'>Featured</li>
        <li className='nav-link col-4'>Special Offer</li>
        </ul>
</div>

        </div>
    </div>
    <div className='container'>
        <div className='row '>
            <Cards />
        </div>
    </div>
    
    
    </>
  )
}
