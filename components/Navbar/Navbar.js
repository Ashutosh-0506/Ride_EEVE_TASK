import React, { useState } from 'react';
import Image from 'next/image'; // For optimized image rendering
import styles from './Navbar.module.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Track search input

  // Handle input changes
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.navbar}>
      {/* Logo Section with Hamburger and Username */}
      <div className={styles.logoContainer}>
        <div className={styles.hamburgerButton}>
          
        </div>
        <div className={styles.logo}>
          <Image
            src="/Images/logo.svg" // Replace with your actual logo path
            alt="RIDE EVEE Logo"
            width={129}
            height={45}
            priority
          />
          <Image
            src="/Images/hamburger.svg" // Replace with your actual hamburger icon path
            alt="Hamburger Icon"
            width={70}
            height={70}
          />
        </div>
        <div className={styles.username}><b>HI RAJ,</b></div> {/* Username */}
      </div>

      {/* Search Section */}
      <div className={styles.search}>
      
      </div>

      {/* Icons Section */}
      <div className={styles.icons}>
      <button className={styles.searchButton}>
          <Image
            src="/Images/search-icon.svg" // Replace with your actual search icon path
            alt="Search Icon"
            width={20}
            height={20}
          />
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        <Image
          src="/Images/icon1.svg" // Replace with actual icon paths
          alt="Icon 1"
          width={24}
          height={24}
        />
        <Image
          src="/Images/icon2.svg" // Replace with actual icon paths
          alt="Icon 2"
          width={24}
          height={24}
        />
        <Image
          src="/Images/icon3.svg" // Replace with actual icon paths
          alt="Icon 3"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Navbar;
