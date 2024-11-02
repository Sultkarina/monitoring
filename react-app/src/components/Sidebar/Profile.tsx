import React from 'react';
import styles from './Profile.module.scss';

const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <img src="/images/profile.svg" alt="Profile" className={styles.avatar} />
      <h4 className={styles.name}>Анна Кулешова</h4>
    </div>
  );
};

export default Profile;
