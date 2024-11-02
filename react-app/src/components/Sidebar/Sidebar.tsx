import React, { useState } from 'react';
import Profile from './Profile';
import NavItem from './Navitem';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
    
      <Profile />
      <button onClick={() => setCollapsed(!collapsed)} className={styles.toggleButton}>
        <img src={collapsed ? '/images/arrow-right.svg' : '/images/arrow-left.svg'} alt="Toggle sidebar" />
      </button>
      <nav className={styles.nav}>
        <NavItem label="Фейкчер" href="#" icon="/images/fake-checker.svg" />
        <NavItem label="Аналитика" href="#" icon="/images/analytics.svg"/>
        <NavItem label="Персональные ленты" href="#" icon="/images/personal-tapes.svg" />
        <NavItem label="Статистика" href="#"icon="/images/statistics.svg" />
        <NavItem label="Тех.показатели" href="#" icon="/images/technical-indicators.svg" />
        <NavItem label="Аномалии" href="#" icon="/images/anomalies.svg" />
        <NavItem label="Список персон" href="#" icon="/images/persons.svg" />
        <NavItem label="Отчеты" href="#" icon="/images/reports.svg" />
        <NavItem label="Настройки" href="#" icon="/images/settings.svg" />
        <NavItem label="Настройки уведомлений" href="#" icon="/images/notification.svg" />
        <NavItem label="Транскрибации" href="#" icon="/images/transcription.svg" />
        <NavItem label="Управление папками" href="#" icon="/images/folder.svg" />
        <NavItem label="Источники" href="#" icon="/images/sources.svg" />
       
      </nav>
    </div>
  );
};

export default Sidebar;
