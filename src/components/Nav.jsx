import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
<nav className="h-[80px] flex justify-between items-center px-5 shadow-lg bg-blue-600 text-white">
    <div>
        <h1 className="font-bold italic">React</h1>
    </div>
    <div className='flex gap-5 justify-between'>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/login'>
            <button className='custom-btn'>LOGIN</button>
        </Link>

    </div>
</nav>
  )
}

export default Nav