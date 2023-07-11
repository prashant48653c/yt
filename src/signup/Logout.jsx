import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
const navigate= useNavigate()
    const logOut=e=>{
        e.preventDefault()
        localStorage.clear('')

        window.location.reload()

    }
  return (
    <>
<button className='logout' onClick={logOut}>Logout</button>

    </>
  )
}

export default Logout