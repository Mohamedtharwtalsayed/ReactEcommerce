import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import {  Route, Routes } from 'react-router-dom';


import Prodact from './Components/Prodact';
import Cart from './Components/Cart';
import SingelProdact from './Components/SingelProdact';



// import { Outlet } from 'react-router-dom';


function App() {
  
 
  return (

<> 



<Routes>

  <Route  path='/' element= {<Login />} />
  <Route  path='login' element= {<Login />} />
  <Route  path='home' element= {<Home />} />
  <Route  path='prodact' element= {<Prodact />} />
  <Route path='prodact/:id' element = {<SingelProdact />} />
  <Route path='cart' element={<Cart />} />

</Routes>

 </>
  );
}

export default App;
