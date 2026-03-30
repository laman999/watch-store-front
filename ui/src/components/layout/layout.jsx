import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import { Outlet } from 'react-router-dom'
import ScrollTop from '../../providers/scrollTop'

function Layout() {
  return (

   <>
   <ScrollTop/>
     <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
   </>
  )
}

export default Layout