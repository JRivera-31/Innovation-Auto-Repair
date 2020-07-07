import styles from "./about.module.css";
import Link from "next/link"

export default function About() {
    return (
        <div>
            <div>
                <h1 className={styles.header}>About</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.information}>
                    Innovation Auto Hail Repair works to restore your vehicle to its pre-storm condition. We work to bring back the value to your car. 
                    With experienced technicians working on your vehicle we can guarantee your vehicle is in good hands. Don’t have insurance? 
                    No problem! We give special discounts for those paying out of pocket. Have a non-hail related dent? We fix those too! Contact us for any questions or concerns!   
                </div>
                <Link href="/ContactForm/contact"><a>Contact Us</a></Link>
                <div className={styles.imageDiv}>
                    <img className={styles.image} src='/images/car.jpg' />  
                </div>
            </div>
        </div>
    )
}