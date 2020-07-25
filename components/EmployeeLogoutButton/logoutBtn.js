import React from 'react';
import styles from './logoutBtn.module.css';
import Router from "next/router"

export default function LogoutBtn() {
    
    const handleLogout = async () => {
        await fetch("/api/auth", {
            method: "DELETE"
        })
        Router.push("/login")
    };

    return (
        <div className={styles.logoutDiv}>
            <a onClick={handleLogout} className={styles.logout}>Logout</a>
        </div>
        
    );
};