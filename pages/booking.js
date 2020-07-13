import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import BookingDetails from '../components/BookingDetails/details';
import Header from '../components/Header/Header';
import BookingForm from '../components/BookingForm/bookingForm';
import Footer from '../components/Footer/footer';
import API from "./api/API"

export default function Booking() {
  const getData = () => {
    API.getAppointmentData().then(res => {
      console.log(res.data[0].dateAndTime)
    })
  }

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Innovation Auto Hail Repair works to restore your vehicle to its pre-storm condition. We work to bring back the value to your car. With experienced technicians working on your vehicle we can guarantee your vehicle is in good hands. Don’t have insurance? No problem! We give special discounts for those paying out of pocket. Have a non-hail related dent? We fix those too! Contact us for any questions or concerns! Keywords: car, repair, hail, damage, crash, accident, collision, free, discount" />
        <title>Book an Appointment</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={utilStyles.pagecontainer}>
        <BookingDetails />
        <BookingForm />
        <Footer />
      </div>
    </div>
  )
};

