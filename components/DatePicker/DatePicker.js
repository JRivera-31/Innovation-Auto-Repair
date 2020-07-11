import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import '../BookingForm/form.module.css';
import API from "../../pages/api/API"
import { addDays, setHours, setMinutes, getDay, format } from 'date-fns';

const datePicker = (props) => {
    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 16)
    );

    
    let excludedTimesArr = [
      setHours(setMinutes(new Date(), 0), 12),
      setHours(setMinutes(new Date(), 30), 12),
      setHours(setMinutes(new Date(), 0), 13)
    ]

    const [stateExcludedTimes, setExcluded] = useState(excludedTimesArr);

    const handleDateChange = (date) => {
      let newdate = format(date, 'MM dd yyyy HH mm')
      setStartDate(date);
      props.setParentDateState(newdate);
    }

    const isWeekday = date => {
      const day = getDay(date);
      return day !== 0 && day !== 6;
    };
  
    const filterData = () => {
      API.getAppointmentData().then(res => {
        let newDate = format(startDate, 'MM dd yyyy HH mm');
        let newDate2 = newDate.slice(0, 10);
        let newTime = newDate.slice(11, 16);

        res.data.forEach(item => {
          if(item.date === newDate2) {
            console.log(item);
            
            excludedTimesArr.push(setHours(setMinutes(startDate, 0), 11));
            setExcluded(excludedTimesArr);
          }
        })
      })
    }

    useEffect(() => {
      excludedTimesArr = [
        setHours(setMinutes(new Date(), 0), 12),
        setHours(setMinutes(new Date(), 30), 12),
        setHours(setMinutes(new Date(), 0), 13)
      ]
      setExcluded(excludedTimesArr);
      filterData();
      console.log(excludedTimesArr);
    }, [startDate])

    return (
      <DatePicker
        selected={startDate}
        onChange={date => handleDateChange(date)}
        showTimeSelect
        filterDate={isWeekday}
        excludeTimes={stateExcludedTimes}
        minDate={new Date()}
        maxDate={addDays(new Date(), 30)}
        minTime={setHours(setMinutes(new Date(), 0), 9)}
        maxTime={setHours(setMinutes(new Date(), 0), 17)}
        dateFormat="MMMM d, yyyy h:mm aa"
        className='datePicker'
      />
    );
  };

export default datePicker;