import utilStyles from "../styles/utils.module.css";
import BookingDetails from '../components/BookingDetails/details';
import Header from '../components/Header/Header';
import BookingForm from '../components/BookingForm/bookingForm';

export default function Booking() {
    return (
        <div>
          <div className={utilStyles.pagecontainer}>
            <Header />
            <BookingDetails />
            <BookingForm />
          </div>
      </div>
    )
};

