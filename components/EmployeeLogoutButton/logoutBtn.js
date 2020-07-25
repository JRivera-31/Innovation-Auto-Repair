import React from 'react';
import styles from './logoutBtn.module.css';
import Router from "next/router"
import { useCurrentUser } from "../../lib/hooks"

export default function LogoutBtn() {
    const [user, { mutate }] = useCurrentUser()

    const handleLogout = async () => {
        await fetch("/api/auth", {
            method: "DELETE"
        })
        mutate(null)
        Router.push("/login")
    };

    return (
        <div className={styles.logoutDiv}>
            <a onClick={handleLogout} className={styles.logout}>Logout</a>
        </div>
        
    );
};