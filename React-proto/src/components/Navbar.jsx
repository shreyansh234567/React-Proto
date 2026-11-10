import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { useAuth } from '../context-api/AuthContext'
import Logout from './Logout'

function Navbar() {

  const { token } = useAuth()
  return (
    <nav className='sticky top-0 z-50 shadow-md bg-white'>
      <div className='max-w-7xl mx-auto px-8 h-16 flex items-center justify-between'>

        <img src={logo} alt="logo" className='h-40 w-70' />

        <div className='flex items-center gap-9 '>
          <Link to="/" className='text-gray-700 hover:text-blue-500 font-medium transition '  > Home</Link>
          <Link to="/courses" className='text-gray-700 hover:text-blue-500 font-medium transition ' > Course</Link>
          {
            token ? (<Logout />) : (<Link to="/" className='bg-blue-500 text-white rounded-md hover:bg-blue-800 px-4 py-2 font-medium transition ' > Login</Link>)
          }

        </div>

      </div>
    </nav>
  )
}

export default Navbar