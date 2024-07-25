import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/status', {
          method: 'GET',
          credentials: 'include',
        });
        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setIsLoggedIn(false);
      }
    };
    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:3000/api/auth/logout', {
        method: 'GET',
        credentials: 'include',
      });
      setIsLoggedIn(false);
      navigate('/signup');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav>
      <div className="flex items-center justify-center gap-12">
        <Link to="/"><img src="https://i.pinimg.com/564x/cf/08/06/cf0806ddc86a53db9557eccaf28f5951.jpg" alt="Logo" className="logo" /></Link>
        <Link to="/" style={{ textDecoration: 'none' }}><h1 className="voteup-text">VoteUp</h1></Link>
      </div>
      <div id="part2" className="flex items-center justify-center gap-12">
        <Link to="/about"><button className="nav-button about-us font-bold text-lg"><h4>About Us</h4></button></Link>
        <Link to="/electionnews"><button className="nav-button services font-bold text-lg"><h4>ELECTION NEWS</h4></button></Link>
        <Link to="/rules"><button className="nav-button contact-us font-bold text-lg"><h4>RULES & REGULATIONS</h4></button></Link>
        {isLoggedIn ? (
          <button className="login-button border-2 border-blue-900 text-lg font-bold" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/signup"><button className="login-button border-2 border-blue-900 text-lg font-bold">Sign Up</button></Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;