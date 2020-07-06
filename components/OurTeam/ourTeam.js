import styles from './ourTeam.module.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <div className={styles.header}>
                <h1>Our Team</h1>
            </div>
            <div className={styles.employees}>
                <div className={styles.row}>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' />
                        </div>
                        <div className={styles.details}>
                            <h4 >First Last</h4>
                            <p>
                                Position
                            </p>
                        </div>
                        
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' />
                        </div>
                        <div className={styles.details}>
                            <h4 >First Last</h4>
                            <p>
                                Position
                            </p>
                        </div>                  
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' />
                        </div>
                        <div className={styles.details}>
                            <h4 >First Last</h4>
                            <p>
                                Position
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' />
                        </div>
                        <div className={styles.details}>
                            <h4 >First Last</h4>
                            <p>
                                Position
                            </p>
                        </div>
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' />
                        </div>
                        <div className={styles.details}>
                            <h4 >First Last</h4>
                            <p>
                                Position
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}