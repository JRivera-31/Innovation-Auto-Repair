import styles from "./about.module.css";
import Carousel from "react-bootstrap/Carousel";

export default function About() {
  return (
    <div className={styles.aboutBody} id="about-section">
      <div className={styles.heading}>
        <h1>About</h1>
        <hr className={styles.aboutHr} />
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            Innovation Auto Hail Repair works to restore your vehicle to its
            pre-storm condition. We work to bring back the value to your car using Paint-less Dent Repair (PDR).
            With experienced technicians working on your vehicle we can
            guarantee your vehicle is in good hands.
          </p>
          <p>
            <span className={styles.boldText}>
              Don’t have insurance? No problem!
            </span>{" "}
            We give special discounts for those paying out of pocket.
          </p>
          <p>Have a non-hail related dent? We fix those too!</p>
          <p>
              Please <span><a className={`${styles.anchor} ${styles.boldText}`} href="#contact-section">contact us</a></span> with any questions or concerns.
          </p>
        </div>
      </div>
      
          <div className={styles.carouselContainer}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/beforeAfter/beforeAfter1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/beforeAfter/beforeAfter2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/beforeAfter/beforeAfter3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          </div>
    </div>
  );
}
