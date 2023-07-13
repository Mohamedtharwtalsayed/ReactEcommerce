import React from 'react'
import './Style/Buttom.css'
import { Link } from 'react-router-dom'
export default function Buttom(props) {
  return (
    <>
    <Link to="/prodact"><button type="button"  id='btn' className={props.color}><span>{props.name}</span></button></Link>
    </>
  )
}
