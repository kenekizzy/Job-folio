import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="text-2xl font-bold text-green-600">Jobelia</div>
        <nav className="flex space-x-6 text-gray-600 font-medium">
        <a className="text-green-600 border-b-2 border-green-600" href="#">Find Jobs</a>
        <a href="#">Find Talent</a>
        <a href="#">Upload Job</a>
        <a href="#">About Us</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-green-600">Login</Link>
          <Link href="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Sign Up</Link>
        </div>
    </header>
  )
}

export default Header