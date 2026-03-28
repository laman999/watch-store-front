import React from 'react'
import Header from '../components/header'
import Brands from '../components/brands'
import Mens from '../components/mens'
import Women from '../components/women'
import Footer from '../components/footer'

function Home() {
  return (
  <>
    <Header/>
    <Brands/>
  <div className='grid  md:grid-cols-1'>
    <Mens/>
    <Women/>
    
  </div>
  </>
  )
}

export default Home
