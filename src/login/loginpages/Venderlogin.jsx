import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setvender } from '../../slices/Venderslice'

const Venderlogin = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [file, setfile] = useState(null)
    const [number, setnumber] = useState('')
    const [price, setprice] = useState('')
    const [product, setproduct] = useState('')
    const dispatch = useDispatch()

    const nevigate = useNavigate()

    const click = () => {
        nevigate("/")
    }


    const submit =()=>{
        const next = {name, email ,price,product,file , number};
        dispatch(setvender(next) );
          
      }
    return (
        <div className="mainopen">
            <button className='backbutton' onClick={click} >Back To Home</button>
            <div className='mainbox'>
                <h1>FOR VENDER</h1>
                <div className="mainbox2">
                    <h4>Full Name</h4>
                    <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setname(e.target.value)} />
                </div>
                <div className="mainbox2">
                    <h4>Email Address</h4>
                    <input type="email" placeholder='Devcareer@gmail.com' value={email} onChange={(e)=>setemail(e.target.value)} />
                </div>
                <div className="mainbox2">
                    <h4>Phone number</h4>
                    <input type="text" placeholder='239****21' value={number} onChange={(e)=>setnumber(e.target.value)} />
                </div>
                <div className="mainbox2">
                    <h4>Price</h4>
                    <input type="text" placeholder='Cost / Transection' value={price} onChange={(e)=>setprice(e.target.value)}/>
                </div>
                <div className="mainbox2">
                    <h4>Products</h4>
                    <input type="text" placeholder='Iteams' value={product} onChange={(e)=>setproduct(e.target.value)} />
                </div>
                
                <div className="mainbox22">
                    <h4>Images / Files</h4>
                    <input type="file" placeholder='Type' value={file} onChange={(e)=>setfile(e.target.value[0])} />
                </div>

                <button onClick={submit} className='button'>Add / Login</button>

            </div>
        </div>
    )
}

export default Venderlogin