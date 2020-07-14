import Layout from '../components/Layout/layout';
import Head from 'next/head';
import BookingDetails from '../components/BookingDetails/details';
import BookingForm from '../components/BookingForm/bookingForm';

export default function Booking() {
  return (
    <Layout>
      <Head>
        <title>Book an Appointment</title>
      </Head>
        <BookingDetails />
        <BookingForm />
    </Layout>
  )
};