import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-accent' : 'text-white hover:text-accent-light';
  };

  return (
    <nav className="bg-primary fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white font-bold text-xl">
            Restaurant Name
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors`}>
              Home
            </Link>
            <Link to="/menu" className={`${isActive('/menu')} transition-colors`}>
              Menu
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors`}>
              About
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors`}>
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
