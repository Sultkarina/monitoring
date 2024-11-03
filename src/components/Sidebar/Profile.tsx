import React from 'react';
import styles from './Profile.module.scss';


  interface ProfileProps {
    collapsed?: boolean; 
  }
  
  const Profile: React.FC<ProfileProps> = ({ collapsed }) => {
    return (
      <div className={styles.profile}>
        <img src="./images/profile.svg" alt="Profile" className={`${styles.avatar} ${collapsed ? styles.collapsed : ''}`} />
        {!collapsed && <h4 className={styles.name}>Анна Кулешова</h4>} 
      </div>
    );
  };
  
  export default Profile;
  


