import DashboardTable from '../components/DashboardTable/DashboardTable'
import BlockoutTable from '../components/BlockoutTable/BlockoutTable'
import Head from 'next/head';

export default function Dashboard() {
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
    <DashboardTable />
    <BlockoutTable />
    </div>
  );
}
