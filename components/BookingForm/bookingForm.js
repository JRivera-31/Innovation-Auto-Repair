import style from './form.module.css';
import { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';

export default function bookingForm() {
    const [selectedDate, setDate] = useState("");

    const handleDateChange = (date) => {

    }

    const handleChange = (e) => {
        console.log('d');
    }

    return (
        <div className={style.formDiv}>
            <h2 className={style.heading}>Book an Appointment</h2>
            <form className={style.form}>
                <label>Name:</label>
                <input type='text' placeholder='Name'></input>
                <label>Phone Number:</label>
                <input type='text' placeholder='Phone Number'></input>
                <label>Description of Damage:</label>
                <textarea type='text' placeholder='Please provide a brief description'></textarea>
                <DatePicker onChange={(e, x) => handleChange(x)}/>
            </form>
        </div>

    );
};