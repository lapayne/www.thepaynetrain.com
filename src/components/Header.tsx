"use client";

import React, { useState, useEffect } from "react";
import { resumeData } from "../data/resume";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.container} container`}>
        <a href="#hero" className={styles.logo} onClick={closeMobileMenu}>
          <span className="gradient-text-alt">{resumeData.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#education" className={styles.navLink}>Education & Certs</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
          <a 
            href={resumeData.resumeUrl} 
            download 
            className="btn btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className={styles.menuToggle} onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          <a href="#about" className={styles.mobileNavLink} onClick={closeMobileMenu}>About</a>
          <a href="#experience" className={styles.mobileNavLink} onClick={closeMobileMenu}>Experience</a>
          <a href="#skills" className={styles.mobileNavLink} onClick={closeMobileMenu}>Skills</a>
          <a href="#education" className={styles.mobileNavLink} onClick={closeMobileMenu}>Education & Certs</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>Contact</a>
          <a 
            href={resumeData.resumeUrl} 
            download 
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
            onClick={closeMobileMenu}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
