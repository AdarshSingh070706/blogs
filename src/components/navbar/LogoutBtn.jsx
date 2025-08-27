import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { button } from '@material-tailwind/react';

function LogoutBtn() {
const dispatch = useDispatch();
const logoutHandler = () => {
  dispatch(logout())
}

  return (
    <button onClick={logoutHandler}
    className='px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600'>
      Logout
    </button>
  )
}

export default LogoutBtn