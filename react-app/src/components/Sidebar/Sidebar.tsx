import React, { useState } from 'react';
import Profile from './Profile';
import NavItem from './NavItem';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <Profile collapsed={collapsed} />
      <button onClick={() => setCollapsed(!collapsed)} className={styles.toggleButton}>
        <img src={collapsed ? '/images/arrow-right.svg' : '/images/arrow-left.svg'} alt="Toggle sidebar" />
      </button>
      <nav className={styles.nav}>
        <NavItem label="Фейкчекер" href="/fakecheker" icon="/images/fake-checker.svg" collapsed={collapsed} />
        <hr className={styles.line}></hr>
        </nav>
        <hr className={styles.space}></hr>
        <nav className={styles.nav}>
        <NavItem label="Аналитика" href="/analytics" icon="/images/analytics.svg" collapsed={collapsed} />
        <NavItem label="Персональные ленты" href="/personal-tapes" icon="/images/personal-tapes.svg" collapsed={collapsed} />
        <NavItem label="Статистика" href="/statistics" icon="/images/statistics.svg" collapsed={collapsed} />
        <NavItem label="Тех. показатели" href="/technical-indicators" icon="/images/technical-indicators.svg" collapsed={collapsed} />
        <NavItem label="Аномалии" href="/anomalies" icon="/images/anomalies.svg" collapsed={collapsed} />
        <NavItem label="Список персон" href="/persons" icon="/images/persons.svg" collapsed={collapsed} />
        <NavItem label="Отчеты" href="/reports" icon="/images/reports.svg" collapsed={collapsed} />
        <NavItem label="Настройки" href="/settings" icon="/images/settings.svg" collapsed={collapsed} />
        <NavItem label="Настройки уведомлений" href="/notification-settings" icon="/images/notification.svg" collapsed={collapsed} />
        <NavItem label="Транскрибации" href="/transcriptions" icon="/images/transcription.svg" collapsed={collapsed} />
        <NavItem label="Управление папками" href="/folder-management" icon="/images/folder.svg" collapsed={collapsed} />
        <NavItem label="Источники" href="/sources" icon="/images/sources.svg" collapsed={collapsed} />
      </nav>
    </div>
  );
};

export default Sidebar;
