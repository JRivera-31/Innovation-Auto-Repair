import React from 'react';
import styles from './logoutBtn.module.css';
import API from '../../util/API';

export default function LogoutBtn() {
    
    const handleLogout = () => {
        API.logout().then(() => {
            window.location.replace('/login');
        })
    };

    return (
        <div className={styles.logoutDiv}>
            <a onClick={handleLogout} className={styles.logout}>Logout</a>
        </div>
        
    );
};