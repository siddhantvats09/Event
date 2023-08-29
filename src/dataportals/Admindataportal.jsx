import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admindataportal = () => {
    const nevigate = useNavigate()
    const click = () => {
        nevigate("/")
      }

      const click1=()=>{
        nevigate("/userdata")
      }
      const click2=()=>{
        nevigate("/venderdata")
      }
    return (
        <>
            <div className="mainContainer">
                <div className="contentContainer">
                    <h2>Welcome Back Admin</h2>
                    <h5>Here you can find data.......</h5>
                    <div className="centeredBox">
                        <div className="innerBox">
                            <h2>All Users Data</h2>
                            <button  onClick={click1}> Users Data </button>
                        </div>
                <button className='backbutton' onClick={click} >Back To Home</button>
                        <div className="innerBox">
                            <h2>All Venders Data</h2>
                            <button onClick={click2}>Venders Data</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admindataportal