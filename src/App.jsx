import { useState } from 'react'
import './App.css'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Homelogin from './login/Homelogin'
import Nav from './components/Navbox'
import Adminlogin from './login/loginpages/Adminlogin'
import Userlogin from './login/loginpages/Userlogin'
import Venderlogin from './login/loginpages/Venderlogin'
import Admindataportal from './dataportals/Admindataportal'
import Readme from './components/Readme'
import Userdatashow from './dataportals/Userdatashow'
import Venderdatashow from './dataportals/Venderdatashow'

function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>

      <Route path="/" element={<Homelogin/>} />
      <Route path="/adminlogin" element={<Adminlogin />} />
      <Route path="/userlogin" element={<Userlogin />} />
      <Route path="/venderlogin" element={<Venderlogin />} />
      <Route path="/admindataportal" element={<Admindataportal />} />
      <Route path="/readme" element={<Readme />} />
      <Route path="/userdata" element={<Userdatashow />} />
      <Route path="/venderdata" element={<Venderdatashow />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
