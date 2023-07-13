import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
export default function Cards(props) {
    let [userData,setUserData]= useState([])
   useEffect(()=>{
    users();
   },[])
  return (
    <>
    
    <div className='containr'>
        <div className='row '>
        {userData?.map((user)=> <div className='prod col-md-3 col-12 ' key={user.id}><Card dataa={user} image={user.image} id={user.id} titel={user.category} price={user.price} description={user.description} /></div>)}
        </div>
    </div>
    
    </>
  )
  async function users (){
    let res= await axios.get("https://fakestoreapi.com/products").then((res)=>{
        setUserData(res.data)
      
    }) 
    return res
  }
}
