import DatePicker from 'react-datepicker';
import API from '../../util/API';
import { useState } from 'react';
import style from './dashDate.module.css';
import { getMonth, format } from 'date-fns';

const DashDatePicker = (props) => {
    const [startDate, setStartDate] = useState(new Date());

    const newBlockout = () => {
        console.log(getMonth(startDate));
        console.log(startDate);
        let newDate = format(startDate, 'MM dd yyyy')
        API.createBlockout(newDate).then(() => {
            props.setParentState();
        })
    }

    return (
    <div className={style.dashDateContainer}>
        <h1>Block Out New Date:</h1>
        <DatePicker 
        selected={startDate} 
        onChange={date => setStartDate(date)} />
        <button className={style.dashDateButton} onClick={() => newBlockout()}>New Date</button>
    </div>
    );
}

export default DashDatePicker;