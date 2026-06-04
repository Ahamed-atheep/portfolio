import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">AA</span>
        </div>
        
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          id="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
          <li className="nav-item"><a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
          <li className="nav-item"><a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li className="nav-item"><a href="#experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <button className="theme-toggle" id="themeToggle" aria-label="Toggle theme" onClick={toggleTheme}>
          <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
