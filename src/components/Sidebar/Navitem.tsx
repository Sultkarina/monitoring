import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.scss';

interface NavItemProps {
  label: string;
  href: string;
  icon?: string;
  collapsed?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, icon, collapsed }) => {
  return (
    <Link to={href} className={`${styles.link} `}>
      {icon && <img src={icon} alt={`${label} icon`} className={`${styles.icon}`} />}
      {!collapsed && label}
    </Link>
  );
};

export default NavItem;
