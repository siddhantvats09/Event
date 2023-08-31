import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setuser } from '../../slices/Userslice'
import { useSelector } from 'react-redux';

const Userlogin = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [budget, setbudget] = useState(0)
  const [number, setnumber] = useState()
  const nevigate = useNavigate()
  const dispatch = useDispatch()
  

  const submit =()=>{
    
    const next = {name, email ,budget , number};
    dispatch(setuser(next));
    alert("Data Updated")
        setemail('')
        
        setname("")
        setbudget('')
       
        setnumber('')  
    
  }
  const click = () => {
    nevigate("/")
  }
  return (
    <div className="mainopen">
      <button className='backbutton' onClick={click} >Back To Home</button>

      <div className='mainbox'>
        <h1>Login Users !</h1>
        <div className="mainbox2">
          <h4>Full Name</h4>
          <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setname(e.target.value)}/>
        </div>
        <div className="mainbox2">
          <h4>Email Address</h4>
          <input type="email" placeholder='Devcareer@gmail.com'  value={email} onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Budget</h4>
          <input type="number" placeholder='$100'  value={budget} onChange={(e)=>setbudget(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Phone Number</h4>
          <input type="text" placeholder='phone number'  value={number} onChange={(e)=>setnumber(e.target.value)} />
        </div>

        <button className='button' onClick={submit}>Login / Signup</button>

      </div>
    </div>
  )
}

export default Userlogin