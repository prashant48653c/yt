import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  // const navigate=useNavigate()
  const logOut = e => {
    e.preventDefault()
    localStorage.clear('')
    // navigate("/")
    window.location.reload()

  }
  return (
    <>
      <p className='logout' onClick={logOut}>Logout</p>

    </>
  )
}

export default Logout