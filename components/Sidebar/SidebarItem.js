import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

const SidebarItem = ({ icon, label, onClick, isActive, svgIcon }) => {
  return (
    <li 
      className={`${styles.sidebarItem} ${isActive ? styles.active : ''}`} 
      onClick={onClick}
    >
      <img src={icon} alt={label} className={styles.icon} />
      <span className={styles.label}>{label}</span>
      {svgIcon && <img src={svgIcon} alt="Arrow icon" className={styles.arrowIcon} />}
    </li>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,       // Function to handle the click event
  isActive: PropTypes.bool,      // Boolean for active state
  svgIcon: PropTypes.string,     // Optional SVG icon
};

SidebarItem.defaultProps = {
  onClick: () => {},            // Default to an empty function
  isActive: false,              // Default to false if not provided
  svgIcon: '',                  // Default to an empty string if no SVG icon
};

export default SidebarItem;
