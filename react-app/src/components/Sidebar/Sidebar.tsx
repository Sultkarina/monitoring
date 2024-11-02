import React, { useState } from 'react';
import Profile from './Profile';
import NavItem from './Navitem';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
    
    <Profile collapsed ={collapsed} />

      <button onClick={() => setCollapsed(!collapsed)} className={styles.toggleButton}>
        <img src={collapsed ? '/images/arrow-right.svg' : '/images/arrow-left.svg'} alt="Toggle sidebar" />
      </button>
      <nav className={styles.nav}>
        <NavItem label="Фейкчер" href="#" icon="/images/fake-checker.svg" collapsed={collapsed}  />
        <NavItem label="Аналитика" href="#" icon="/images/analytics.svg" collapsed={collapsed} />
        <NavItem label="Персональные ленты" href="#" icon="/images/personal-tapes.svg" collapsed={collapsed}  />
        <NavItem label="Статистика" href="#"icon="/images/statistics.svg" collapsed={collapsed}  />
        <NavItem label="Тех.показатели" href="#" icon="/images/technical-indicators.svg" collapsed={collapsed}  />
        <NavItem label="Аномалии" href="#" icon="/images/anomalies.svg" collapsed={collapsed}  />
        <NavItem label="Список персон" href="#" icon="/images/persons.svg" collapsed={collapsed}  />
        <NavItem label="Отчеты" href="#" icon="/images/reports.svg" collapsed={collapsed}  />
        <NavItem label="Настройки" href="#" icon="/images/settings.svg" collapsed={collapsed}  />
        <NavItem label="Настройки уведомлений" href="#" icon="/images/notification.svg" collapsed={collapsed}  />
        <NavItem label="Транскрибации" href="#" icon="/images/transcription.svg" collapsed={collapsed}  />
        <NavItem label="Управление папками" href="#" icon="/images/folder.svg" collapsed={collapsed}  />
        <NavItem label="Источники" href="#" icon="/images/sources.svg" collapsed={collapsed}  />
      </nav>
    </div>
  );
};

export default Sidebar;
