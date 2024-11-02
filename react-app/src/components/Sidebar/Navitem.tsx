import React from 'react';
import styles from './NavItem.module.scss';

interface NavItemProps {
  label: string;
  href: string;
  icon?: string;
  isActive?: boolean; 
}

const NavItem: React.FC<NavItemProps> = ({ label, href, icon, isActive }) => {
  return (
    <a href={href} className={`${styles.link} ${isActive ? styles.active : ''}`}>
      {icon && <img src={icon} alt={`${label} icon`} className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`} />}
      {label}
    </a>
  );
};

export default NavItem;
