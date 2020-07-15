import style from "./confirmation.module.css";
import API from "../../util/API"
import { useEffect, useState } from "react"
import fetch from "isomorphic-fetch"

export default function ConfirmationPage() {
  // const [lastAppointment, setLast] = useState({})
  
  // useEffect(() => {
  //   API.getLastAppointment().then(result => {
  //     setLast(result.data[0])
  //   })
  // }, [])

  return (
    <div className={style.confirmationContainer}>
      <h1>Appointment Booked!</h1>
      <div className={style.confirmationHr}></div>
      <p>Thank you for booking an appointment with us! You appointment is confirmed!</p>
      <div className={style.details}>
        {/* <p><strong>Confirmation Number:</strong> {lastAppointment._id} </p>
        <p><strong>Date:</strong> {lastAppointment.date.split(' ').join('/')}   </p>
        <p><strong>Time:</strong> {lastAppointment.time.split(' ').join(':')} </p> */}
        <p><strong>Location:</strong><a href="https://www.google.com/maps/search/?api=1&query=3301+S+Texas+Ave+Bryan%2+TX+77802" target="_blank"> 3301 S Texas Ave Bryan, TX 77802 </a> </p>
        <p>In the meantime, if you need anything feel free to call us at (970) 539-8184, or email us at <a href="mailto:innovation.pdr@gmail.com">innovation.pdr@gmail.com</a>. </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/lastappointment")
  const result = await res.json()

  return {
    props:  result.data  
  }
}