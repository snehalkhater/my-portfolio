import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <nav className="bg-gray-800 p-4">
            <Link to="/" className="text-white mr-4">Home</Link>
            <Link to="/about" className="text-white mr-4">About</Link>
            <Link to="/contact" className="text-white">Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar