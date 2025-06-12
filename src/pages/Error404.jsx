import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='text-center'>
        <h1 className='text-4xl'>Error404</h1>
        <h3 className="text-2xl">Page not found</h3>
        <Link to='/' className='underline active:bg-red-500'>Go back to Homepage</Link>


    </div>
  )
}

export default Error404