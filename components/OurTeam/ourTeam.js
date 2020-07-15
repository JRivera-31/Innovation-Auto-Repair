import styles from './ourTeam.module.css';

export default function OurTeam() {
    return (
        <div className={styles.ourTeamBody}>
            <div className={styles.heading}>
                <h1>Our Team</h1>
                <hr className={styles.ourTeamHr}/>
            </div>
            <div className={styles.employees}>
                <div className={styles.row}>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='/images/Donald.png' alt='Team member 1'/>
                        </div>
                        <div className={styles.details}>
                            <h4>Donald Glover</h4>
                            <p>
                                Owner
                            </p>
                        </div>
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='/images/Aubrey-Plaza.jpg' alt='Team member 2'/>
                        </div>
                        <div className={styles.details}>
                            <h4>Aubrey Plaza</h4>
                            <p>
                                CEO
                            </p>
                        </div>                  
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='/images/brad.jpg' alt='Team member 3'/>
                        </div>
                        <div className={styles.details}>
                            <h4>Brad Traversy</h4>
                            <p>
                                Educator
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='/images/elon-musk.jpg' alt='Team member 4'/>
                        </div>
                        <div className={styles.details}>
                            <h4>Elon Musk</h4>
                            <p>
                                Inventor/Co-CEO
                            </p>
                        </div>
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='/images/Rashida_Jones.jpg' alt='Team member 5'/>
                        </div>
                        <div className={styles.details}>
                            <h4>Rashida Jones</h4>
                            <p>
                                Co-Owner
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}