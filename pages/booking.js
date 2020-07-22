import Layout from '../components/Layout/layout';
import Head from 'next/head';
import BookingDetails from '../components/BookingDetails/details';
import BookingForm from '../components/BookingForm/bookingForm';
import fetchJSON from "fetch-json"

export default function Booking({ appointments, blockouts }) {
  return (
    <Layout>
      <Head>
        <title>Book an Appointment</title>
      </Head>
        <BookingDetails />
      <BookingForm blockouts={blockouts} appointments={appointments} />
    </Layout>
  )
};

export async function getServerSideProps() {
  const appointments = fetchJSON.get("http://localhost:3000/api/appointments/appointment")
  const blockouts = fetchJSON.get("http://localhost:3000/api/blockouts/blockout")
  // const { appointments } = await res1.json()
  // const { data } = await res2.json()
  
  return { props: { appointments: await appointments, blockouts: await blockouts }}
}