import React from 'react'
// import Home from '../NavPages/Home'
// import OnlineBanking from '../NavPages/OnlineBanking'
// import ContactUs from '../NavPages/ContactUs'
// import SearchBank from '../NavPages/SearchBank'
import {Link} from 'react-router-dom'
import { Login } from './Account/Login';
// mainNavbar
function Navbar() {
  return (
    <nav className='nav'>
<a href='/' className='site-title'>BMS</a>
<ul>
      <li> <Link to="/">Home</Link></li>
    <li><Link to="/administration">Administration</Link></li>
    {/* <li><Link to="/searchBank">Search Bank</Link></li> */}
    <li><Link to="/account">Create New Account</Link></li>
    <li><Link to="/login">Login</Link></li>

    <li><Link to="/contactus">Contact Us</Link></li>
</ul>

    </nav>
  )
}

export default Navbar;