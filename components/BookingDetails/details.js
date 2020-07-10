import styles from './details.module.css';

export default function Details() {
    return(
        <section className={styles.container}>
            <h3 className={styles.header}>
                Details:
            </h3>
            <p>
            Each appointment includes a free full detailing!
            </p>
        </section>
    );
};