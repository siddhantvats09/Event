import React from 'react'

const Readme = () => {
  return (
    <>
        <div className='login-information'>
        <ul>
            <li>
                when We open the website it Shows the 3 Login Portals ----
            </li>
            <li>
                User Login , Admin Login , Vender Login 
            </li>
            <li>
                When We click on users Portal We can login as user and When we Click on Vender Portal We can login As Vender
            </li>
            <li>
                When WE click on the admin portal then We can Login as admin we need to Type credentials that are given blew
                <ul>
                    <li>
                        Gmail ID : admin@gmail.com
                    </li>
                    <li>
                        Password : admin123
                    </li>
                </ul>
                Expect these no one Can enter inside Admin Portal
            </li>
            <li>
                Inside Admin portal there are Two Fields Where you can See Users Data And Venders Data 
            </li>
            <li>
                Where you Can See data of Both Users And Venders 
            </li>
        </ul>

    </div>
    <div className='login-information'>
        <ul>
            <li>
                We can prevent the users informations by Set the admin Status in Local storage value True By using useState Or in server If and only Admin can Nevigate through these pages.
            </li>
            <li>
                We can set user data with the help of redux tool kit
            </li>
        </ul>

    </div>
    </>
  )
}

export default Readme