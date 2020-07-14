import Head from "next/head";
import Router from "next/router";
import API from "../util/API";
import { useState, useEffect } from "react";
import DashboardTable from '../components/DashboardTable/DashboardTable';
import BlockoutTable from '../components/BlockoutTable/BlockoutTable';
import EmployeeLogoutBtn from '../components/EmployeeLogoutButton/logoutBtn';

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
    <div>
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
          <DashboardTable />
          <BlockoutTable />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
