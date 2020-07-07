import styles from './ourTeam.module.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <div className={styles.header}>
                <h1>Our Team</h1>
                <hr className={styles.ourTeamHr}/>
            </div>
            <div className={styles.employees}>
                <div className={styles.row}>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' />
                        </div>
                        <div className={styles.details}>
                            <h4 >Amy Akhavan</h4>
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
                            <h4 >Bruce Baggins</h4>
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
                            <h4 >Carole Crowe</h4>
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
                            <h4 >Dennis Dominguez</h4>
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
                            <h4 >Emmet Einstein</h4>
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