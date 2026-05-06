import React from 'react'
import Header from '../components/header'
import Brands from '../components/brands'
import Mens from '../components/mens'
import Women from '../components/women'
import Craftsmanship from '../components/craftsmanship'
import Royalgold from '../components/royalgold'
import { Helmet } from 'react-helmet'
import  { useRef } from 'react'

function Home() {
  const brandsRef = useRef(null);
  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
  <>
  <Helmet>
      <title>Home</title>
  </Helmet>
    <Header onExploreClick={scrollToBrands}/>
    <div ref={brandsRef}>
        <Brands />
    </div>  <div className='grid  md:grid-cols-1'>
    <Mens/>
    <Craftsmanship/>
    <Royalgold/>
   
  </div>
  </>
  )
}

export default Home
