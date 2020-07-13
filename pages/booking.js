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
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk' crossOrigin="anonymous"></link>
      </Head>
        <BookingDetails />
        <BookingForm />
    </Layout>
  )
};