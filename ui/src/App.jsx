import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from './components/layout/layout'
import Home from './pages/home'
import Men from './pages/men'
import Women from './pages/women'
import About from './pages/about'
import Contact from './pages/contact'
import Register from './pages/register';
import Login from './pages/login';




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>} path='/'>
        <Route element={<Home/>} index/>
        <Route element={<Men/>} path='men'/>
        <Route element={<Women/>} path='women'/>
        <Route element={<About/>} path='about'/>
        <Route element={<Contact/>} path='contact'/>
      </Route>
       <Route element={<Register/>} path='register'/>
       <Route element={<Login/>} path='login'/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
