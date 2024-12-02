import { useState } from 'react';
import styles from './Sidebar.module.css';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  // State to manage sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Example Sidebar items (you can replace with actual items)
  const sidebarItems = [
    { icon: '/Images/dashboard.svg', label: 'Dashboard', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/geography.svg', label: 'Geography', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/booking.svg', label: 'Booking B2C', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/corporate.svg', label: 'Corporate Booking', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/customer.svg', label: 'Customer', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/fleet.svg', label: 'Fleet Management', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/driver.svg', label: 'Driver Management', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/tariff.svg', label: 'Tariff Management', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/reports.svg', label: 'Reports', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/billing.svg', label: 'Billing', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/admin.svg', label: 'Admin', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/coupons.svg', label: 'Coupons', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/enquiry.svg', label: 'Enquiry', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/manage.svg', label: 'Manage', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/services.svg', label: 'Services', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/admin-settings.svg', label: 'Admin Settings', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/settings.svg', label: 'Settings', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/management.svg', label: 'Management', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/attendance.svg', label: 'Attendance', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/customer-reviews.svg', label: 'Customer Reviews', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/retail-user.svg', label: 'Retail User', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/holiday.svg', label: 'Holiday', svgIcon: '/Images/arrow.svg' },
    { icon: '/Images/employee.svg', label: 'Employee', svgIcon: '/Images/arrow.svg' },
  ];

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      {/* Hamburger button for small screens */}
      <div className={styles.hamburgerButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Map through sidebar items */}
      {sidebarItems.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          label={item.label}
          svgIcon={item.svgIcon}
        />
      ))}
    </div>
  );
};

export default Sidebar;
