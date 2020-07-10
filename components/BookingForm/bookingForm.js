import style from './form.module.css';

export default function bookingForm() {
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
            </form>
        </div>
    );
};