import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo">
          Kuzhal
        </NavLink>
        
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className="navbar-toggle-icon"></span>
        </button>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className="navbar-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/lessons" className="navbar-link" onClick={closeMenu}>Lessons</NavLink>
          <NavLink to="/metronome" className="navbar-link" onClick={closeMenu}>Metronome</NavLink>
          <NavLink to="/practice" className="navbar-link" onClick={closeMenu}>Practice</NavLink>
          <NavLink to="/flute" className="navbar-link" onClick={closeMenu}>Flute</NavLink>
          
          {user ? (
            <>
              <NavLink to="/user" className="navbar-link" onClick={closeMenu}>Profile</NavLink>
              <button className="btn btn-accent" onClick={logout}>Logout</button>
            </>
          ) : (
            <button className="btn btn-primary login-btn" onClick={() => console.log('Login')}>
              Login with Google
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;