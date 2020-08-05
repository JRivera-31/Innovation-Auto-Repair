import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "../BookingForm/form.module.css";
import { addDays, setHours, setMinutes, getDay, format } from "date-fns";

const datePicker = (props) => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  //Array of times to be excluded (by default, lunch time)
  let excludedTimesArr = [
    setHours(setMinutes(new Date(), 0), 12),
    setHours(setMinutes(new Date(), 30), 12),
    setHours(setMinutes(new Date(), 0), 13),
  ];

  //Converts the blockout date to the appropriate data type
  const convertBlockout = (blockout) => {
    let blockoutArr = blockout.split(" ");
    let d = new Date(
      blockoutArr[2],
      parseInt(blockoutArr[0]) - 1,
      blockoutArr[1]
    );
    return d;
  };

  //Array of excluded dates
  let excludedDateArr = [];

  //Crates a state for the excluded times array
  const [stateExcludedTimes, setExcluded] = useState(excludedTimesArr);
  const [stateExcludedDates, setExcludedDates] = useState(excludedDateArr);

  //When the date changes on the cal
  const handleDateChange = (date) => {
    //Format the date
    let newdate = format(date, "MM dd yyyy HH mm");
    //Set the start date on the change
    setStartDate(date);
    //Pass the newdate with the better formatting to the parent component
    props.setParentDateState(newdate);
  };

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  //Filters the times
  const filterData = () => {
    //Formats the state date into a usable form
    let newDate = format(startDate, "MM dd yyyy HH mm");
    //Just the mm dd yyyy
    let newDate2 = newDate.slice(0, 10);
    // Go through every item
    props.appointments.forEach((item) => {
      //If the appointment date matches the selected date
      if (item.date === newDate2) {
        //Black out the time slot
        excludedTimesArr.push(
          setHours(
            setMinutes(startDate, parseInt(item.time.split(" ")[1])),
            parseInt(item.time.split(" ")[0])
          )
        );
        setExcluded(excludedTimesArr);
      }
    });
  };

  //On load grab the blockout dates and push them to the array after converting them
  useEffect(() => {
    props.blockouts.forEach((item) => {
      excludedDateArr.push(convertBlockout(item.date));
    });
    
    setExcludedDates(excludedDateArr)
  }, []);

  //Every time the startdate loads/updates
  useEffect(() => {
    //Reset the excluded array
    excludedTimesArr = [
      setHours(setMinutes(new Date(), 0), 12),
      setHours(setMinutes(new Date(), 30), 12),
      setHours(setMinutes(new Date(), 0), 13),
    ];
    //Set it
    setExcluded(excludedTimesArr);
    //Call the filter
    filterData();
  }, [startDate]);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => handleDateChange(date)}
      showTimeSelect
      filterDate={isWeekday}
      excludeTimes={stateExcludedTimes}
      minDate={new Date()}
      excludeDates={stateExcludedDates}
      maxDate={addDays(new Date(), 30)}
      minTime={setHours(setMinutes(new Date(), 0), 9)}
      maxTime={setHours(setMinutes(new Date(), 0), 17)}
      dateFormat="MMMM d, yyyy h:mm aa"
      className="datePicker"
    />
  );
};

export default datePicker;
