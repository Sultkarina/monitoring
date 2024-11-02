import React from 'react';
import styles from './NavItem.module.scss';

interface NavItemProps {
    label: string;
    href: string;
    icon?: string;
    isActive?: boolean; 
    collapsed?: boolean; 
  }
  
  const NavItem: React.FC<NavItemProps> = ({ label, href, icon, isActive, collapsed }) => {
    return (
      <a href={href} className={`${styles.link} ${isActive ? styles.active : ''}`}>
        {icon && <img src={icon} alt={`${label} icon`} className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`} />}
        {!collapsed && label} 
      </a>
    );
  };
  

export default NavItem;
