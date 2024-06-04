import { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'

import {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
