import utilStyles from "../styles/utils.module.css";
import BookingDetails from '../components/BookingDetails/details';
import Header from '../components/Header/Header';
import BookingForm from '../components/BookingForm/bookingForm';
import API from "./api/API"

export default function Booking() {
  const test = () => {
    API.get().then(res => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <button onClick={test}>Test</button>
          <div className={utilStyles.pagecontainer}>
            <BookingDetails />
            <BookingForm />
          </div>
      </div>
    )
};

