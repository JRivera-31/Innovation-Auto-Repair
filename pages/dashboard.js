import Head from "next/head";
import Router from "next/router";
import API from "../util/API";
import { useState, useEffect } from "react";
import DashboardTable from '../components/DashboardTable/DashboardTable';
import BlockoutTable from '../components/BlockoutTable/BlockoutTable';
import EmployeeLogoutBtn from '../components/EmployeeLogoutButton/logoutBtn';
import style from './dashboard.module.css';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.getMe()
      .then((res) => {
        if (!res.data) {
          return Router.push("/login");
        }

        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.dashboardContainer}>
      <Head>
        <title>Dashboard</title>
        <link
          rel="shortcut icon"
          type="img/png"
          href="/images/Innovation_Logo-no-bg.png"
        />
      </Head>
      {user ? (
        <>
          <EmployeeLogoutBtn />
          <h1>APPOINTMENTS:</h1>
          <DashboardTable />
          <h1>BLOCKED OUT DATES:</h1>
          <BlockoutTable />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
