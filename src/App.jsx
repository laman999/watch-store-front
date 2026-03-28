import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/layout'
import Home from './pages/home'
import Men from './pages/men'
import Women from './pages/women'
import About from './pages/about'
import Contact from './pages/contact'




function App() {
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
    </Routes>
    </BrowserRouter>
  )
}

export default App
