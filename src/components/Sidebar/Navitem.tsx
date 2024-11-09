import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './NavItem.module.scss';

interface NavItemProps {
  label: string;
  href: string;
  icon?: string;
  collapsed?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, icon, collapsed }) => {
  const spriteIconPath = `#${icon?.replace('./images/', '').replace('.svg', '')}`;

  const linkClass = classNames(styles.link, {
    [styles.collapsedLink]: collapsed,
  });

  const iconClass = classNames(styles.icon, {
    [styles.collapsedIcon]: collapsed,
  });

  return (
    <Link to={href} className={linkClass}>
      {icon && (
        <svg className={iconClass}>
          <use xlinkHref={spriteIconPath} />
        </svg>
      )}
      {!collapsed && label}
    </Link>
  );
};

export default NavItem;
