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
        <>
        <h3 className={style.heading}>Block Out New Date:</h3>
        <div className={style.dashDateContainer}>
            <DatePicker 
            selected={startDate} 
            onChange={date => setStartDate(date)}
            className={style.datePicker} />
        </div>
        <button className={style.dashDateButton} onClick={() => newBlockout()}>Block Date</button>
        </>
    );
}

export default DashDatePicker;