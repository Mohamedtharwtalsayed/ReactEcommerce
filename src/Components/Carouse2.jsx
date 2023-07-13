
import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carouse2() {
    let [userData,setUserData]= useState([])
    useEffect(()=>{
     users();
    },[])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    ;
  return (
    <>
    <h1 className='text-center m-'>Featured Products</h1>
      <div className="container ">
      <Slider {...settings} >
        {userData?.map((user)=> <Card key={user.id} image={user.image} titel={user.category} price={user.price} description={user.description} />)}
        </Slider>
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
