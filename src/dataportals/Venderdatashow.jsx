import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletevender } from '../slices/Venderslice';
import { useNavigate } from 'react-router-dom';

const Venderdatashow = () => {
  const dispatch = useDispatch()
  const nevigate=useNavigate()
  
  const userList = useSelector((state) => state.userlist);
  
  return (
    <div>
      <h2 className='heading'>User List And All Data about Vender Will be Shown Here !</h2>
      <button className='backadmin' onClick={()=>nevigate('/admindataportal')}>Back</button>
      <ul>
        {userList && userList.map((user, index) => (
          <li key={index}>
          <p className='name'>Name: {user.name}</p>
            <p className='email'>Email: {user.email}</p>
            <p className='budget'>Budget: {user.price}</p>
            <p className='number'>Number: {user.number}</p>
            <p className='number'>Number: {user.product}</p>
            <img src={user.file} alt="images" width={'200px'} />
            {/* <Button  onClick={(e)=>clickk(index)}>Delete Data</Button> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Venderdatashow