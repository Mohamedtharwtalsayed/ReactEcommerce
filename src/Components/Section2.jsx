import React from 'react'
import Buttom from './Buttom'
export default function Section2() {
  return (
   <>
   <div>
    <div className='row text-center d-flex  col-12 '>
    <div className='col-md-5 mx-4 my-5' >
        <img className='d-block background col-12 col-md-12' src="https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img1.jpg" alt="" />
        
<p className='text-dark bg-text'>Super Sale</p>
<h1 className='text-dark'>New Collection</h1>
<Buttom color="btn btn-danger mb-4 text" name='SHOP ' />


        </div>

    
        <div className='col-md-5 me-3 my-5 pr-5 ' ><img className='col-12 col-md- d-block background' src="https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img2.jpg" alt="" />
        
        <p className='text-dark bg-text'>Sale 40% Off</p>
<h1 className='text-dark'>New Season
</h1>
<Buttom color="btn btn-danger mb-4 text" name='SHOP' />
        </div>
        
    </div>
    
   </div>

   
   
   </>
  )
}
