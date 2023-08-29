import React from 'react'
import { useSelector } from 'react-redux';

const Userdatashow = () => {
    const userList = useSelector((state) => state.userlist);
  return (
    <div>
      <h2 className='heading'>User List And All Data Here !</h2>
      <ul>
        {userList && userList.map((user, index) => (
          <li key={index}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Budget: {user.budget}</p>
            <p>Number: {user.number}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Userdatashow