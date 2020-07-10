import styles from "./about.module.css";

export default function About() {
    return (
        <div className={styles.aboutBody} id="about-section">
            <div className={styles.heading}>
                <h1 >About</h1>
                <hr className={styles.aboutHr} />
            </div>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>
                        Innovation Auto Hail Repair works to restore your vehicle to its pre-storm condition. We work to bring back the value to your car. With experienced technicians working on your vehicle we can guarantee your vehicle is in good hands.
                    </p>
                    <p>
                        <span className={styles.boldText}>Don’t have insurance? No problem!</span> We give special discounts for those paying out of pocket.
                    </p>
                    <p>
                        Have a non-hail related dent? We fix those too!
                    </p>
                    <p className={styles.boldText}>
                        <a className={styles.anchor} href='#contact-section'>
                        Please contact us with any questions or concerns.
                        </a>
                    </p>
                </div>
                <div className={styles.imageDiv}>
                    <img className={styles.image} src='/images/car-min.jpg' alt="Picture of orange car" />
                </div>
            </div>
        </div>
    )
}