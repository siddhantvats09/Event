import { Button } from 'bootstrap'
import React, { useEffect ,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {

  const nevigate = useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [text, settext] = useState(true)



  const handelclick=()=>{
    if(email==="admin@gmail.com" && password === "admin123"){
      nevigate("/admindataportal")
    }else{
      settext(false)
      setemail("")
      setpassword("")
    }
  }

  const click = () => {
    nevigate("/")
  }
  return (
    <div className="mainopen">
    {text ? (<></>):(<h5 className='alert'  style={{color:"red"}}  > Try again ! Email wrong or Password Wrong </h5>)}
      <button className='backbutton' onClick={click} >Back To Home</button>
      <div className='mainbox'>
        <h1> Admin Login</h1>
        <div className="mainbox2">
          <h4>Email Address</h4>
          <input type="email" placeholder='Devcareer@gmail.com' value={email} onChange={(e)=>setemail(e.target.value)} required/>
        </div>
        <div className="mainbox2">
          <h4>Password</h4>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} required />
        </div>

        <button className='button' onClick={handelclick} >Login / Signup</button>

      </div>
    </div>
  )
}

export default Adminlogin