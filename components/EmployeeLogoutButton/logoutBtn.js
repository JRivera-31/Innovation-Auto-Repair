import React from 'react';
import styles from './logoutBtn.module.css';
import API from '../../util/API';

export default function LogoutBtn() {
    
    const handleLogout = () => {
        API.logout().then(res => {
            res.redirect('/employee');
        })
    };

    return (
        <div className={styles.btnDiv}>
            <button onClick={handleLogout} className={styles.btn}>Logout</button>
        </div>
        
    );
};