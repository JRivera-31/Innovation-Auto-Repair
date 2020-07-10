import styles from './details.module.css';

export default function Details() {
    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>
                    Coverage Details
                </h1>
                <hr className={styles.formHr} />
            </div>
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
            <p>
                Plus, each appointment includes a free full detailing!
            </p>
        </section>
    );
};