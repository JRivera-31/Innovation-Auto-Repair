import React from 'react';
import styles from './logoutBtn.module.css';
import API from '../../util/API';
import Router from "next/router"

export default function LogoutBtn() {
    
    const handleLogout = () => {
        API.logout().then(() => {
            Router.push('/login');
        })
    };

    return (
        <div className={styles.logoutDiv}>
            <a onClick={handleLogout} className={styles.logout}>Logout</a>
        </div>
        
    );
};