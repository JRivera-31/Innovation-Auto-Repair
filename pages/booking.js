import Layout from '../components/Layout/layout';
import Head from 'next/head';
import BookingDetails from '../components/BookingDetails/details';
import BookingForm from '../components/BookingForm/bookingForm';
import API from '../util/API'

export default function Booking() {
  const getData = () => {
    API.getAppointmentData().then(res => {
      console.log(res.data[0].dateAndTime)
    })
  }

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