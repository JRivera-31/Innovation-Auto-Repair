import Layout from '../components/Layout/layout';
import Head from 'next/head';
import BookingDetails from '../components/BookingDetails/details';
import BookingForm from '../components/BookingForm/bookingForm';
import Appointment from "../models/appointment"
import Blockout from "../models/blockout"
import dbConnect from "../util/dbConnect"

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
  await dbConnect()

  const result = await Appointment.find({})
  const appointments = result.map(doc => {
    const appointment = doc.toObject()
    appointment._id = appointment._id.toString()
    return appointment
  })

  const result2 = await Blockout.find({})
  const blockouts = result2.map(doc => {
    const blockout = doc.toObject()
    blockout._id = blockout._id.toString()
    return blockout
  })
  
  return {props: {appointments: appointments, blockouts: blockouts}}
}