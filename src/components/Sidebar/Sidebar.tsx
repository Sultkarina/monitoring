import React, { useState } from 'react';
import Profile from './Profile';
import NavItem from './Navitem';
import classNames from 'classnames';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarClass = classNames(styles.sidebar, {
    [styles.collapsed]: collapsed,
  });

  const toggleButtonClass = classNames(styles.toggleButton, {
    [styles.toggleButtonCollapsed]: collapsed,
  });

  return (
    <div className={sidebarClass}>
      <Profile collapsed={collapsed} />
      <button onClick={() => setCollapsed(!collapsed)} className={toggleButtonClass}>
        <img src={collapsed ? './images/arrow-right.svg' : './images/arrow-left.svg'} alt="Toggle sidebar" />
      </button>
      <nav className={styles.nav}>
        <NavItem label="Фейкчекер" href="/fakecheker" icon="fake-checker" collapsed={collapsed} />
        <hr className={styles.line} />
      </nav>
      <hr className={styles.space} />
      <nav className={styles.nav}>
        <NavItem label="Аналитика" href="/analytics" icon="analytics" collapsed={collapsed} />
        <NavItem label="Персональные ленты" href="/personal-tapes" icon="personal-tapes" collapsed={collapsed} />
        <NavItem label="Статистика" href="/statistics" icon="statistics" collapsed={collapsed} />
        <NavItem label="Тех. показатели" href="/technical-indicators" icon="technical-indicators" collapsed={collapsed} />
        <NavItem label="Аномалии" href="/anomalies" icon="anomalies" collapsed={collapsed} />
        <NavItem label="Список персон" href="/persons" icon="persons" collapsed={collapsed} />
        <NavItem label="Отчеты" href="/reports" icon="reports" collapsed={collapsed} />
        <NavItem label="Настройки" href="/settings" icon="settings" collapsed={collapsed} />
        <NavItem label="Настройки уведомлений" href="/notification-settings" icon="notification" collapsed={collapsed} />
        <NavItem label="Транскрибации" href="/transcriptions" icon="transcription" collapsed={collapsed} />
        <NavItem label="Управление папками" href="/folder-management" icon="folder" collapsed={collapsed} />
        <NavItem label="Источники" href="/sources" icon="sources" collapsed={collapsed} />
      </nav>
      <div className={styles.space2}></div>
    </div>
  );
};

export default Sidebar;
