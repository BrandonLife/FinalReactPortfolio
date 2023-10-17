import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'
function Navigation() {
  return (
    <div className='nav-container'>
    <div className='nav-link-container'>
        <div className='nav-link'>
            <Link to='/'>Home</Link>
        </div>
        <div className='nav-link'>
            <Link to='/projects'>Projects</Link>
        </div>
        <div className='nav-link'>
            <Link to='/contact'>Contact Me</Link>
        </div>
        <div className='nav-link'>
            <Link to='/new'>Add new Project</Link>
        </div>
      </div>
</div>
  )
}

export default Navigation