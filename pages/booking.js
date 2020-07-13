import Layout from '../components/Layout/layout';
import Head from 'next/head';
import BookingDetails from '../components/BookingDetails/details';
import BookingForm from '../components/BookingForm/bookingForm';

export default function Booking() {
  return (
    <Layout>
      <Head>
        <title>Book an Appointment</title>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk' crossOrigin="anonymous"></link>
      </Head>
        <BookingDetails />
        <BookingForm />
    </Layout>
  )
};