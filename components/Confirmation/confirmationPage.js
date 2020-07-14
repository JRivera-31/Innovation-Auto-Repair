import style from "./confirmation.module.css";

export default function ConfirmationPage() {
    return (
      <div className={style.confirmationContainer}>
        <h1>Appointment Booked!</h1>
        <p>Thank you for booking an appointment with us!</p>
        <div className={style.details}>
        <p>Confirmation Number: </p>
        <p>Date: </p>
        <p>Time: </p>
        <p>Location: 3301 S Texas Ave Bryan, TX 77802 </p>
        </div>
        
        <p>In the meantime, if you need anything feel free to call us at (970) 539-8184, or email us at <a href="mailto:innovation.pdr@gmail.com">innovation.pdr@gmail.com</a>. </p>
      </div>
    );
  }
  