import { NavLink } from 'react-router-dom'

import './NavBar.css'


const NavBar = () => {
  return (
    <div id='navbar'>
      <ul>
        <li><NavLink className='navlink' to='/about'>About</NavLink></li>
        <li><NavLink className='navlink' to='/portfolio'>Portfolio</NavLink></li>
        <li><NavLink className='navlink' to='/blog'>Blog</NavLink></li>
        <li><NavLink className='navlink' to='/resumes'>Download Resume</NavLink></li>
        <li><NavLink className='navlink' to='/contact'>Contact Me</NavLink></li>
      </ul>
    </div>
  )
}


export default NavBar
