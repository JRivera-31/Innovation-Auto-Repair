import Head from "next/head";
import Router from "next/router";
import { useState, useEffect } from "react";
import DashboardTable from '../components/DashboardTable/DashboardTable';
import BlockoutTable from '../components/BlockoutTable/BlockoutTable';
import EmployeeLogoutBtn from '../components/EmployeeLogoutButton/logoutBtn';
import style from './dashboard.module.css';
import fetchJSON from "fetch-json"
import { useCurrentUser } from "../lib/hooks"

export default function Dashboard({appointments, blockouts}) {
  // const [user, setUser] = useState(null);
  const [user, { mutate }] = useCurrentUser()
  
  useEffect(() => {
    if(!user) Router.push("/login")
  }, [user]);

  return (
    <div className={style.dashboardContainer}>
      <Head>
        <title>Employee Dashboard</title>
        <link
          rel="shortcut icon"
          type="img/png"
          href="/images/Innovation_Logo-no-bg.png"
        />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      {user ? (
        <>
          <EmployeeLogoutBtn />
          <h2>Appointments:</h2>
          <hr className={style.dashboardHr}/>
        <DashboardTable appointments={appointments}/>
          <h2>Blocked Out Dates:</h2>
          <hr className={style.dashboardHr}/>
          <BlockoutTable blockouts={blockouts} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const appointments = fetchJSON.get("https://innovation-auto-repair.jrivera-31.vercel.app/api/appointments/appointment")
  const blockouts = fetchJSON.get("https://innovation-auto-repair.jrivera-31.vercel.app/api/blockouts/blockout")
  
  return { props: { appointments: await appointments, blockouts: await blockouts }}
}
