import style from './form.module.css';
import { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';

export default class BookingForm extends React.Component {

    render() {
        return (
            <div className={style.formDiv}>
                <div className={style.heading}>
                    <h2>Book an Appointment</h2>
                    <hr className={style.formHr} />
                </div>
                <form className={style.form}>
                    <label className={style.formLabel}>Name:</label>
                    <input className={style.formInput} type='text' placeholder='Name'></input>
                    <label className={style.formLabel}>Phone Number:</label>
                    <input className={style.formInput} type='text' placeholder='Phone Number'></input>
                    <label className={style.formLabel}>Description of Damage:</label>
                    <textarea className={`${style.formInput} ${style.formTextArea}`} type='text' placeholder='Please provide a brief description' cols="30" rows="10" maxLength={800}></textarea>
                    <DatePicker onChange={(e, x) => handleChange(x)} />
                    <button className={style.bookingSubmit} onClick={() => this.handleFormSubmit(event)}>Submit</button>
                </form>
            </div>
        );
    };
};