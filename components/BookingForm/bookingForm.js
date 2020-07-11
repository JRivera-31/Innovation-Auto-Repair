import style from './form.module.css';
import { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';

export default class BookingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          messageLength: 0,
          status: ""
        };
    }

    handleMessageChange = (e) => {
        this.setState({ messageLength: e.target.value.length })
    }
    
    handleFormSubmit = (e) => {
        this.setState({ messageLength: 0 });
    }

    render() {
        return (
            <div className={style.formDiv}>
                <div className={style.heading}>
                    <h1>Book an Appointment</h1>
                    <hr className={style.formHr} />
                </div>
                <form
                    className={style.form}
                    onSubmit={this.submitForm}
                >
                    <label className={style.formLabel}>Name:</label>
                    <input className={style.formInput} type='text' placeholder='Name'></input>
                    <label className={style.formLabel}>Phone Number:</label>
                    <input className={style.formInput} type='text' placeholder='Phone Number'></input>
                    <label className={style.formLabel}>Description of Damage:</label>
                    <textarea className={`${style.formInput} ${style.formTextArea}`} type='text' onChange={() => this.handleMessageChange(event)} placeholder='Please provide a brief description' cols="30" rows="5" maxLength={500}></textarea>
                    <p className={`${style.formCharCounter} ${style.formInput}`}>{this.state.messageLength}/300</p>
                    <label className={style.formLabel}>Select Date & Time:</label>
                    <div className={`${style.dateDiv} ${style.dateInput}`}>
                    <DatePicker
                        onChange={(e, x) => handleChange(x)}
                    />
                    </div>
                    
                    <button className={style.bookingSubmit} onClick={() => this.handleFormSubmit(event)}>Submit</button>
                </form>
            </div>
        );
    };
};