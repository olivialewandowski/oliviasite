"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Function to get the current page name based on pathname
  const getPageName = (isMobile = false) => {
    switch(pathname) {
      case '/about-me':
        return 'about me';
      case '/ai-governance':
        return 'ai governance';
      case '/data-engineering':
        // For mobile, show a shorter version
        return isMobile ? (
          <div className="stacked-page-name">
            <span>data</span>
            <span>eng</span>
          </div>
        ) : 'data engineering';
      case '/fruition-research':
        return 'fruition research';
      case '/strings-of-thought':
        return 'strings of thought';
      default:
        return ''; // No page name on home page
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <div className="logo-text">
              <span className="first-name">olivia</span>
              <span className="last-name">lewandowski</span>
            </div>
          </Link>
        </div>
        
        {pathname !== '/' && (
          <div className="current-page">
            <div className="desktop-page-name">{getPageName()}</div>
            <div className="mobile-page-name">{getPageName(true)}</div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;