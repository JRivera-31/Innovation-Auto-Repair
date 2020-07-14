import style from "./confirmation.module.css";
import API from "../../util/API"
import {useEffect, useState} from "react"

export default function ConfirmationPage() {
  const [lastAppointment, setLast] = useState(null)
  
  useEffect(() => {
    API.getLastAppointment().then(result => {
      setLast(result.data[0])
    })
  }, [])

    return (
      <div className={style.confirmationContainer}>
        <h1>Appointment Booked!</h1>
        <div className={style.confirmationHr}></div>
        <p>Thank you for booking an appointment with us! Please save the information below!</p>
        <div className={style.details}>
        <p><strong>Confirmation Number:</strong> {lastAppointment._id} </p>
        <p><strong>Date:</strong> {lastAppointment.date.split(' ').join('/')}   </p>
        <p><strong>Time:</strong> {lastAppointment.time.split(' ').join(':')} </p>
        <p><strong>Location:</strong> 3301 S Texas Ave Bryan, TX 77802 </p>
        <p>In the meantime, if you need anything feel free to call us at (970) 539-8184, or email us at <a href="mailto:innovation.pdr@gmail.com">innovation.pdr@gmail.com</a>. </p>  
        </div>
      </div>
    );
  }
  