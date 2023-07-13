import React from 'react'

import NavBar from './NavBar'
import Carouse from './Carouse'
import Section2 from './Section2'
import Prodact from './Prodact'
import Section3 from './Section3'
import Carouse2 from './Carouse2'
import Section4 from './Section4'
import Section5 from './Section5'

export default function Home() {
  return (
    <>
   <NavBar />
   <div className='containe '><Carouse /></div>
   <div className='container'><Section2 /></div>
   <Prodact />
   <Section3 />
   <Carouse2 />
   <Section4 />
   <Section5 />
   </>
  )
}
