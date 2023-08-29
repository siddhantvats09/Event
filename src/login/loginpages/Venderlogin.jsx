import React from 'react'
import { useNavigate } from 'react-router-dom'

const Venderlogin = () => {

    const nevigate = useNavigate()

    const click = () => {
        nevigate("/")
    }
    return (
        <div className="mainopen">
            <button className='backbutton' onClick={click} >Back To Home</button>
            <div className='mainbox'>
                <h1>FOR VENDER</h1>
                <div className="mainbox2">
                    <h4>Full Name</h4>
                    <input type="text" placeholder='Your Name' />
                </div>
                <div className="mainbox2">
                    <h4>Email Address</h4>
                    <input type="email" placeholder='Devcareer@gmail.com' />
                </div>
                <div className="mainbox2">
                    <h4>Phone number</h4>
                    <input type="text" placeholder='292039****21' />
                </div>
                <div className="mainbox2">
                    <h4>Price</h4>
                    <input type="text" placeholder='Cost / Transection' />
                </div>
                <div className="mainbox2">
                    <h4>Products</h4>
                    <input type="text" placeholder='Iteams' />
                </div>
                
                <div className="mainbox22">
                    <h4>Images / Files</h4>
                    <input type="file" placeholder='Type' />
                </div>

                <button className='button'>Add / Login</button>

            </div>
        </div>
    )
}

export default Venderlogin