import React from 'react'
import { Link } from 'react-router-dom'

const Homelogin = () => {
 

  return (
    <div className='mainopen'> 
    
    <h1>Login Portal</h1>
    <h5>Welcome to best event management Website</h5>
        <div className='mainboxheadinhg'>

        <div className='circle' id="adminbox"><h2><Link className='links' to="/userlogin">USER LOGIN</Link></h2></div>
        <div className='circle' id="userbox"> <h2><Link className='links' to="/adminlogin">ADMIN LOGIN</Link></h2></div>
        <div className='circle' id="venderbox"> <h2><Link className='links' to= "/venderlogin">VENDER LOGIN</Link></h2></div>
        
        </div>
    </div>
  )
}

export default Homelogin