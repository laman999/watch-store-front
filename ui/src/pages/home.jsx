import React from 'react'
import Header from '../components/header'
import Brands from '../components/brands'
import Mens from '../components/mens'
import Women from '../components/women'
import Craftsmanship from '../components/craftsmanship'
import Royalgold from '../components/royalgold'
import { Helmet } from 'react-helmet'

function Home() {
  return (
  <>
  <Helmet>
      <title>Home</title>
  </Helmet>
    <Header/>
    <Brands/>
  <div className='grid  md:grid-cols-1'>
    <Mens/>
    <Women/>
    <Craftsmanship/>
   <Royalgold/>
   
  </div>
  </>
  )
}

export default Home
