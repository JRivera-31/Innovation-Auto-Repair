import DatePicker from 'react-datepicker';
import { useState } from 'react';
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes';
import getDay from 'date-fns/getDay';
import '../BookingForm/form.module.css';

const datePicker = () => {
    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 16)
    );

    const isWeekday = date => {
      const day = getDay(date);
      return day !== 0 && day !== 6;
    };

    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        filterDate={isWeekday}
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 12),
          setHours(setMinutes(new Date(), 30), 12),
          setHours(setMinutes(new Date(), 0), 13)
        ]}
        minTime={setHours(setMinutes(new Date(), 0), 9)}
        maxTime={setHours(setMinutes(new Date(), 0), 17)}
        dateFormat="MMMM d, yyyy h:mm aa"
        className='datePicker'
      />
    );
  };

export default datePicker;