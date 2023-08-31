
import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser } from '../slices/Userslice';

const Userdatashow = () => {
    const userList = useSelector((state) => state.userlist);

    const dispatch = useDispatch()
    const click=(id)=>{
      dispatch(deleteuser(id))
    }
  return (
    <div>
      <h2 className='heading'>User List And All Data Here !</h2>
      <ul>
        {userList && userList.map((user, index) => (
          <li key={index}>
            <p className='name'>Name: {user.name}</p>
            <p className='email'>Email: {user.email}</p>
            <p className='budget'>Budget: {user.budget}</p>
            <p className='number'>Number: {user.number}</p>
            {/* <Button  onClick={(e)=>click(index)}>Delete Data</Button> */}
           
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Userdatashow