import Head from "next/head";
import Router from "next/router";
import { useState, useEffect } from "react";
import DashboardTable from '../components/DashboardTable/DashboardTable';
import BlockoutTable from '../components/BlockoutTable/BlockoutTable';
import EmployeeLogoutBtn from '../components/EmployeeLogoutButton/logoutBtn';
import style from './dashboard.module.css';

export default function Dashboard({appointments}) {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   API.getMe()
  //     .then((res) => {
  //       if (!res.data) {
  //         return Router.push("/login");
  //       }

  //       setUser(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
      {/* {user ? ( */}
        <>
          <EmployeeLogoutBtn />
          <h2>Appointments:</h2>
          <hr className={style.dashboardHr}/>
        <DashboardTable appointments={appointments}/>
          <h2>Blocked Out Dates:</h2>
          <hr className={style.dashboardHr}/>
          <BlockoutTable />
        </>
      {/* ) : (
        <div>Loading...</div>
      )} */}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/appointments/appointment")
  const { data } = await res.json()
  
  return { props: { appointments: data }}
}
