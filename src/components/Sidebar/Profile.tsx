import React from 'react';
import classNames from 'classnames';
import styles from './Profile.module.scss';

interface ProfileProps {
  collapsed?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ collapsed }) => {
  const avatarClass = classNames(styles.avatar, {
    [styles.collapsedAvatar]: collapsed,
  });

  const nameClass = classNames(styles.name, {
    [styles.collapsedName]: collapsed,
  });

  return (
    <div className={styles.profile}>
      <img src="./images/profile.svg" alt="Profile" className={avatarClass} />
      {!collapsed && <h4 className={nameClass}>Анна Кулешова</h4>}
    </div>
  );
};

export default Profile;
