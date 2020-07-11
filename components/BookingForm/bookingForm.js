import style from './form.module.css';
import DatePicker from '../DatePicker/DatePicker';
import API from '../../pages/api/API'

export default class BookingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: "",
          phoneNumber: "",
          emailAddress: "",
          messageLength: 0,
          description: "",
          status: "",
          selectedDate: "",
          selectedTime: ""
        };
    }

    //When you submit the form, pass the state key/value pairs into the api function
    handleFormSubmit = (e) => {
        API.createAppointment(this.state.name, this.state.emailAddress, this.state.phoneNumber, this.state.description, this.state.selectedDate, this.state.selectedTime).then(() => {
            console.log('appointment made');
        })
        //Reset the character counter to 0
        this.setState({ messageLength: 0 });
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleEmailChange = (e) => {
        this.setState({ emailAddress: e.target.value });
    }

    handlePhoneChange = (e) => {
        this.setState({ phoneNumber: e.target.value });
    }

    handleMessageChange = (e) => {
        this.setState({ description: e.target.value });
        this.setState({ messageLength: e.target.value.length })
    }

    //Takes in the date passed by the child compononet
    setParentDateState = (date) => {
        //Split it into an array
        let dateArr = date.split(' ');
        //Holder
        let dateSelect = [];
        //Add the first 3 indexes to the holder
        for(let i = 0; i < 3; i++) {
            dateSelect.push(dateArr[i]);
        }
        //Hold the last two in another holder
        let timeSelect = dateArr[3] + ' ' + dateArr[4];
        //Set the respective state
        this.setState({ selectedTime: timeSelect });
        this.setState({ selectedDate: dateSelect.join(' ') });
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
                    <input className={style.formInput} type='text' placeholder='Name' onChange={(e) => this.handleNameChange(e)}></input>
                    <label className={style.formLabel}>Email Address:</label>
                    <input className={style.formInput} type='text' placeholder='Email Address' onChange={(e) => this.handleEmailChange(e)}></input>
                    <label className={style.formLabel}>Phone Number:</label>
                    <input className={style.formInput} type='text' placeholder='Phone Number' onChange={(e) => this.handlePhoneChange(e)}></input>
                    <label className={style.formLabel}>Description of Damage:</label>
                    <textarea className={`${style.formInput} ${style.formTextArea}`} type='text' onChange={() => this.handleMessageChange(event)} placeholder='Please provide a brief description' cols="30" rows="5" maxLength={500}></textarea>
                    <p className={`${style.formCharCounter} ${style.formInput}`}>{this.state.messageLength}/300</p>
                    <label className={style.formLabel}>Select Date & Time:</label>
                    <div className={`${style.dateDiv} ${style.dateInput}`}>
                    <DatePicker setParentDateState={this.setParentDateState}/>
                    </div>
                    
                    <button className={style.bookingSubmit} onClick={() => this.handleFormSubmit(event)}>Submit</button>
                </form>
            </div>
        );
    };
};