import styles from './details.module.css';

export default function Details() {
    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>
                    Details
                </h1>
                <hr className={styles.formHr} />
            </div>
            <div>
                <p>
                    Use the form below to schedule an appointment for a free estimate from one of our technicians.
                <br/>
                    During that meeting, an appointment for repair can be made.
                </p>
                <br/>
            </div>
            <h4>Additional Services</h4>
            <ul>
                <li>
                    Deductible Assistance
                </li>
                <li>
                    All Insurances Accepted
                </li>  
                <li>
                    Rental Coverage & Rental Assistance
                </li>
            </ul>
        </section>
    );
};