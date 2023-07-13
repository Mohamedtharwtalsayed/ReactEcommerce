import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Style/singelprod.css'
import NavBar from './NavBar'
import Buttom from './Buttom'
export default function SingelProdact() {
    const[prodact,setProdact]=useState()
    const params = useParams()
    const prodId = params.id
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${prodId}`).then((resp)=>setProdact(resp.data))
    },[])

  return (
<>
<NavBar />


<div className="container parent-1"><div className="card mb-">
  <img src={prodact?.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{prodact?.category}</h5>
    <p className="card-text">{prodact?.description}</p> 
    <p className="card-text"><small className="text-body-secondary">{prodact?.price}$</small></p>
    <Buttom color="btn btn-danger " name='Buying' />
  </div>
</div></div>


</>



    )
}
