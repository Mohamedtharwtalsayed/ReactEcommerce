import React ,{ useEffect, useState }from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Style/login.css'

export default function Login() {

const navigate = useNavigate()
const [users,setUsers] = useState()
const [name,setName] = useState()
const [pass,setPass] = useState()
useEffect (()=>{
axios.get('https://fakestoreapi.com/users').then((resp)=>setUsers(resp.data.users));
},[])
const handlelogin=()=>{
  const user = users?.filter((r)=>{
    if(r.username===name){
      if(r.password===pass){
        return r;
         
      }
    }
    console.log(user)
  })
  
}





  return (
    <>
     <div className="container container1">
        <div className="row">
          <p className='Wrong'></p>
            <div className="col-md-6 bg1 ">
                
                <form  className="form-group form">
                <h1> <span className="badge bg-success">Login</span></h1>
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleFormControlInpu" placeholder="name@example.com"/>
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" onChange={(e)=>setPass(e.target.value)} className="form-control" id="exampleFormControlInput" placeholder="Password"></input> 
                <div className="submit">
  <input type="submit" onClick={()=>handlelogin(handelData())} className="btn btn-success" id="exampleFormControlInput1" placeholder="submit"></input>

                </div>
                </form>
            </div>
            </div></div> 
    </>
  )
function handelData(data){
  console.log(data);
  navigate("/home")
}
}