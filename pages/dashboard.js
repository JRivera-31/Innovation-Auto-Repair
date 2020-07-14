import DashboardTable from '../components/DashboardTable/DashboardTable'
import Head from 'next/head';

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Book an Appointment</title>
        <link
                    rel="shortcut icon"
                    type="img/png"
                    href="/images/Innovation_Logo-no-bg.png"
                />
      </Head>
    <DashboardTable />
    </div>
  );
}
