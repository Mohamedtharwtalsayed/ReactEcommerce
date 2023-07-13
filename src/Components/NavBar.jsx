
import Logo from './Logo'
import { Link , NavLink } from 'react-router-dom';
import {FaCartArrowDown } from "react-icons/fa6";
import NavBar1 from './NavBar1';
import './Style/NavBar1.css'

export default function NavBar(props) {
  

 

 
  
  return (
    <>
    <NavBar1 />
    <hr/>
    <nav className='navbar navbar-expand-lg bg-body-tertiary  col-12 col-md-12'   >
  <div className="container-flui  pace-around   parent11">
  
    
    <div className="collaps navbarnpm-collapse s" id="navbarSupportedContent">

    
     <Logo className="navbar" />
    


      <div className="container ro parent10">
          <ul className="navbar-nav    mb-lg-0  space-aroun">
       
             <li className="nav-item dropdown">
         
                <NavLink to="/home" className="nav-link dropdo-toggle"> HOME</NavLink>
            </li>
       
            <li className="nav-item dropdown">
                <Link to="/prodact" className="nav-link dropdow-toggle" > PRODACTS </Link>
            </li>
          </ul>
      </div>
      <div className="child parent11">    <div className="icons icon11   d-flex ">
   <form className="Navbar10" role="search">
     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
     <button className="btn btn-outline-success " type="submit">Search</button>
   </form>
<Link to="/cart" className='btn ssss p-2 btn-outline-danger'>
     <FaCartArrowDown className='ssss btn-outline-success span' />

</Link>
   </div></div>
   
    </div>
  </div>
</nav>
    </>
)

}
