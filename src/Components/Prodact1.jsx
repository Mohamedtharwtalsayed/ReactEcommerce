import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'
import NavBar1 from './NavBar1'
import axios from 'axios'
import Card from './Card'


export default function Prodact1() {
    let [userData,setUserData]= useState([])
  
    useEffect(()=>{
     users();
    },[])
  return (
    <>
    <NavBar1 />
     <NavBar />
     <div className='container'>
        <div className='row' >
        {userData?.map((user)=> <div className='prod' key={user.id}><Card  image={user.image} id={user.id} titel={user.category} price={user.price} description={user.description} dataa={user.data} /></div>)}
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
