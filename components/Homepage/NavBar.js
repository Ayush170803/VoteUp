import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
    <div className="flex items-center justify-center gap-12">
    <Link to="/"><img src="https://i.pinimg.com/564x/cf/08/06/cf0806ddc86a53db9557eccaf28f5951.jpg" alt="Logo" className="logo"/></Link>
    <Link to="/"><h1 className="voteup-text">VoteUp</h1></Link>
    </div>
    <div id="part2" className="flex items-center justify-center gap-12">
    <Link to="/about"><button className="nav-button about-us font-bold text-lg"><h4>About Us</h4></button></Link>
    <Link to="/news"><button className="nav-button services font-bold text-lg"><h4>ELECTION NEWS</h4></button></Link>
    <Link to="/rules"><button className="nav-button contact-us font-bold text-lg"><h4>RULES & REGULATIONS</h4></button></Link>
    <Link to="/signup"><button className="login-button border-2 border-blue-900 text-lg font-bold">Sign Up</button></Link>
    </div>
</nav>
  )
}

export default NavBar;
